import { config as loadDotenv } from 'dotenv'
import { existsSync } from 'fs'
import { resolve } from 'path'

import {
  caseStudies,
  type CaseStudyEntry,
  type CaseStudySeed,
  type LocaleCode,
  type LocalizedFields,
} from './case-studies'
import type { CaseStudy } from '../payload-types'

const TARGET_LOCALES: LocaleCode[] = ['es', 'de']

const main = async (): Promise<void> => {
  const args = process.argv.slice(2)
  const force = args.includes('--force')
  const slugFilter = args.find((arg) => !arg.startsWith('--'))
  const envName = process.env.SEED_ENV

  if (envName) {
    const envPath = resolve(process.cwd(), `.env.${envName}`)
    if (!existsSync(envPath)) {
      console.error(`Env file not found: ${envPath}`)
      process.exit(1)
    }
    loadDotenv({ path: envPath, override: true })
    console.log(`Loaded env from ${envPath}`)
  }

  const allSlugs = caseStudies.map((c) => c.data.slug)
  if (slugFilter && !allSlugs.includes(slugFilter)) {
    console.error(`No seed found for "${slugFilter}". Available: ${allSlugs.join(', ')}`)
    process.exit(1)
  }

  const targets = slugFilter
    ? caseStudies.filter((c) => c.data.slug === slugFilter)
    : caseStudies

  // If CMS_URL is set we use the remote REST API (recommended for prod).
  // Otherwise fall back to the embedded Payload Local API against the local DB.
  if (process.env.CMS_URL) {
    await seedViaApi(targets, force)
  } else {
    await seedViaLocalPayload(targets, force)
  }

  process.exit(0)
}

// Build a per-locale patch that aligns localized array entries by index with
// the freshly seeded/refreshed English doc, preserving row IDs so Payload
// updates the existing rows instead of replacing them.
const buildLocalePatch = (doc: CaseStudy, t: LocalizedFields): Record<string, unknown> => {
  const patch: Record<string, unknown> = {}
  if (t.title !== undefined) patch.title = t.title
  if (t.description !== undefined) patch.description = t.description
  if (t.award && doc.award) {
    patch.award = { ...doc.award, ...t.award }
  }
  if (t.keyFeatures && doc.keyFeatures) {
    patch.keyFeatures = doc.keyFeatures.map((row, i) => ({
      ...row,
      ...(t.keyFeatures![i] ?? {}),
    }))
  }
  if (t.tags && doc.tags) {
    patch.tags = doc.tags.map((row, i) => ({
      ...row,
      ...(t.tags![i] ?? {}),
    }))
  }
  return patch
}

const seedViaLocalPayload = async (targets: CaseStudyEntry[], force: boolean): Promise<void> => {
  // Import Payload + config AFTER env override so the config picks up the right
  // DATABASE_URI / PAYLOAD_SECRET. Static imports would evaluate the config at
  // module load time, before we've had a chance to override env.
  const { getPayload } = await import('payload')
  const { default: configPromise } = await import('@payload-config')
  const { ensureDevUser } = await import('./dev-user')

  const payload = await getPayload({ config: configPromise })

  await ensureDevUser(payload)

  for (const { data, translations } of targets) {
    const existing = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: data.slug } },
      limit: 1,
      depth: 0,
    })

    let englishDoc: CaseStudy

    if (existing.docs.length > 0) {
      if (!force) {
        console.log(
          `skipped case-studies/${data.slug} (already exists; pass --force to overwrite)`,
        )
        continue
      }
      englishDoc = (await payload.update({
        collection: 'case-studies',
        id: existing.docs[0].id,
        data,
        locale: 'en',
      })) as CaseStudy
      console.log(`updated case-studies/${data.slug} (en)`)
    } else {
      englishDoc = (await payload.create({
        collection: 'case-studies',
        data,
        locale: 'en',
      })) as CaseStudy
      console.log(`created case-studies/${data.slug} (en)`)
    }

    if (!translations) continue
    for (const locale of TARGET_LOCALES) {
      const t = translations[locale]
      if (!t) continue
      const patch = buildLocalePatch(englishDoc, t)
      if (Object.keys(patch).length === 0) continue
      await payload.update({
        collection: 'case-studies',
        id: englishDoc.id,
        locale,
        data: patch,
      })
      console.log(`updated case-studies/${data.slug} (${locale})`)
    }
  }
}

const seedViaApi = async (targets: CaseStudyEntry[], force: boolean): Promise<void> => {
  const baseUrl = process.env.CMS_URL!.replace(/\/$/, '')
  const email = process.env.CMS_EMAIL
  const password = process.env.CMS_PASSWORD

  if (!email || !password) {
    console.error('CMS_EMAIL and CMS_PASSWORD must be set when CMS_URL is set.')
    process.exit(1)
  }

  const token = await login(baseUrl, email, password)
  console.log(`Authenticated against ${baseUrl}`)

  for (const { data, translations } of targets) {
    const existingId = await findBySlug(baseUrl, token, data.slug)

    let docId: string | number

    if (existingId) {
      if (!force) {
        console.log(
          `skipped case-studies/${data.slug} (already exists; pass --force to overwrite)`,
        )
        continue
      }
      await apiRequest(
        `${baseUrl}/api/case-studies/${existingId}?locale=en`,
        token,
        'PATCH',
        data,
      )
      docId = existingId
      console.log(`updated case-studies/${data.slug} (en)`)
    } else {
      const created = await apiRequest<{ doc?: { id: string | number } }>(
        `${baseUrl}/api/case-studies?locale=en`,
        token,
        'POST',
        data,
      )
      if (!created?.doc?.id) throw new Error(`Create response missing id for ${data.slug}`)
      docId = created.doc.id
      console.log(`created case-studies/${data.slug} (en)`)
    }

    if (!translations) continue

    // Fetch the EN doc fresh so we get array row IDs to merge into per-locale
    // patches — keeps Payload updating the same rows across locales.
    const englishDoc = await fetchDoc(baseUrl, token, docId)

    for (const locale of TARGET_LOCALES) {
      const t = translations[locale]
      if (!t) continue
      const patch = buildLocalePatch(englishDoc, t)
      if (Object.keys(patch).length === 0) continue
      await apiRequest(
        `${baseUrl}/api/case-studies/${docId}?locale=${locale}`,
        token,
        'PATCH',
        patch,
      )
      console.log(`updated case-studies/${data.slug} (${locale})`)
    }
  }
}

const login = async (baseUrl: string, email: string, password: string): Promise<string> => {
  const res = await fetch(`${baseUrl}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Login failed (${res.status}): ${body}`)
  }

  const json = (await res.json()) as { token?: string }
  if (!json.token) throw new Error('Login response did not include a token')
  return json.token
}

const findBySlug = async (
  baseUrl: string,
  token: string,
  slug: string,
): Promise<string | null> => {
  const url = `${baseUrl}/api/case-studies?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=0`
  const res = await fetch(url, { headers: { Authorization: `JWT ${token}` } })

  if (!res.ok) {
    throw new Error(`Lookup failed for ${slug} (${res.status}): ${await res.text()}`)
  }

  const json = (await res.json()) as { docs: Array<{ id: string }> }
  return json.docs[0]?.id ?? null
}

const fetchDoc = async (
  baseUrl: string,
  token: string,
  id: string | number,
): Promise<CaseStudy> => {
  const res = await fetch(`${baseUrl}/api/case-studies/${id}?locale=en&depth=0`, {
    headers: { Authorization: `JWT ${token}` },
  })
  if (!res.ok) {
    throw new Error(`Fetch failed for ${id} (${res.status}): ${await res.text()}`)
  }
  return (await res.json()) as CaseStudy
}

const apiRequest = async <T = unknown>(
  url: string,
  token: string,
  method: 'POST' | 'PATCH',
  data: CaseStudySeed | Record<string, unknown>,
): Promise<T> => {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error(`${method} ${url} failed (${res.status}): ${await res.text()}`)
  }

  return (await res.json()) as T
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
