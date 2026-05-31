import { config as loadDotenv } from 'dotenv'
import { existsSync } from 'fs'
import { resolve } from 'path'

import { caseStudies, type CaseStudySeed } from './case-studies'
import { psychologistDemos, type PsychologistDemoSeed } from './psychologist-demos'

// Each collection is seeded by slug. `docs` is loosely typed because the two
// collections have different shapes; Payload's create/update validate the data.
type SeedGroup = {
  collection: 'case-studies' | 'psychologist-demos'
  docs: Array<CaseStudySeed | PsychologistDemoSeed>
}

const seedGroups: SeedGroup[] = [
  { collection: 'case-studies', docs: caseStudies },
  { collection: 'psychologist-demos', docs: psychologistDemos },
]

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

  const allSlugs = seedGroups.flatMap((group) => group.docs.map((doc) => doc.slug))
  if (slugFilter && !allSlugs.includes(slugFilter)) {
    console.error(`No seed found for "${slugFilter}". Available: ${allSlugs.join(', ')}`)
    process.exit(1)
  }

  const targets: SeedGroup[] = slugFilter
    ? seedGroups
        .map((group) => ({ ...group, docs: group.docs.filter((doc) => doc.slug === slugFilter) }))
        .filter((group) => group.docs.length > 0)
    : seedGroups

  // If CMS_URL is set we use the remote REST API (recommended for prod).
  // Otherwise fall back to the embedded Payload Local API against the local DB.
  if (process.env.CMS_URL) {
    await seedViaApi(targets, force)
  } else {
    await seedViaLocalPayload(targets, force)
  }

  process.exit(0)
}

const seedViaLocalPayload = async (targets: SeedGroup[], force: boolean): Promise<void> => {
  // Import Payload + config AFTER env override so the config picks up the right
  // DATABASE_URI / PAYLOAD_SECRET. Static imports would evaluate the config at
  // module load time, before we've had a chance to override env.
  const { getPayload } = await import('payload')
  const { default: configPromise } = await import('@payload-config')
  const { ensureDevUser } = await import('./dev-user')

  const payload = await getPayload({ config: configPromise })

  await ensureDevUser(payload)

  for (const { collection, docs } of targets) {
    for (const data of docs) {
      const existing = await payload.find({
        collection,
        where: { slug: { equals: data.slug } },
        limit: 1,
        depth: 0,
      })

      if (existing.docs.length > 0) {
        if (force) {
          await payload.update({
            collection,
            id: existing.docs[0].id,
            data: data as never,
          })
          console.log(`updated ${collection}/${data.slug}`)
        } else {
          console.log(
            `skipped ${collection}/${data.slug} (already exists; pass --force to overwrite)`,
          )
        }
        continue
      }

      await payload.create({ collection, data: data as never })
      console.log(`created ${collection}/${data.slug}`)
    }
  }
}

const seedViaApi = async (targets: SeedGroup[], force: boolean): Promise<void> => {
  const baseUrl = process.env.CMS_URL!.replace(/\/$/, '')
  const email = process.env.CMS_EMAIL
  const password = process.env.CMS_PASSWORD

  if (!email || !password) {
    console.error('CMS_EMAIL and CMS_PASSWORD must be set when CMS_URL is set.')
    process.exit(1)
  }

  const token = await login(baseUrl, email, password)
  console.log(`Authenticated against ${baseUrl}`)

  for (const { collection, docs } of targets) {
    for (const data of docs) {
      const existingId = await findBySlug(baseUrl, token, collection, data.slug)

      if (existingId) {
        if (force) {
          await apiRequest(`${baseUrl}/api/${collection}/${existingId}`, token, 'PATCH', data)
          console.log(`updated ${collection}/${data.slug}`)
        } else {
          console.log(
            `skipped ${collection}/${data.slug} (already exists; pass --force to overwrite)`,
          )
        }
        continue
      }

      await apiRequest(`${baseUrl}/api/${collection}`, token, 'POST', data)
      console.log(`created ${collection}/${data.slug}`)
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
  collection: string,
  slug: string,
): Promise<string | null> => {
  const url = `${baseUrl}/api/${collection}?where[slug][equals]=${encodeURIComponent(slug)}&limit=1&depth=0`
  const res = await fetch(url, { headers: { Authorization: `JWT ${token}` } })

  if (!res.ok) {
    throw new Error(`Lookup failed for ${slug} (${res.status}): ${await res.text()}`)
  }

  const json = (await res.json()) as { docs: Array<{ id: string }> }
  return json.docs[0]?.id ?? null
}

const apiRequest = async (
  url: string,
  token: string,
  method: 'POST' | 'PATCH',
  data: CaseStudySeed | PsychologistDemoSeed,
): Promise<void> => {
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
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
