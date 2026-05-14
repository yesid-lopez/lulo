// One-shot translator: applies the author-written ES/DE translations in
// `translations.ts` to each matching case-studies record via Payload's Local
// API. Idempotent: a locale is only filled in when its `title` is still empty
// (i.e. has not been translated yet). Pass `--force` to overwrite existing
// translations, or a slug as the positional arg to limit to one record.

import { config as loadDotenv } from 'dotenv'
import { existsSync } from 'fs'
import { resolve } from 'path'

import { caseStudyTranslations, type CaseStudyTranslation } from './translations'

type TargetLocale = 'es' | 'de'
const TARGET_LOCALES: TargetLocale[] = ['es', 'de']

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

  const knownSlugs = Object.keys(caseStudyTranslations)
  if (slugFilter && !knownSlugs.includes(slugFilter)) {
    console.error(`No translations found for "${slugFilter}". Available: ${knownSlugs.join(', ')}`)
    process.exit(1)
  }

  const targets = slugFilter ? [slugFilter] : knownSlugs

  // Import Payload + config AFTER env override so the config picks up the right
  // DATABASE_URI / PAYLOAD_SECRET. Static imports would evaluate the config at
  // module load time, before we've had a chance to override env.
  const { getPayload } = await import('payload')
  const { default: configPromise } = await import('@payload-config')

  const payload = await getPayload({ config: configPromise })

  for (const slug of targets) {
    const found = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
      locale: 'en',
    })

    if (found.docs.length === 0) {
      console.log(`skipped ${slug}: no case study with this slug exists yet`)
      continue
    }

    const doc = found.docs[0]
    const translations = caseStudyTranslations[slug]

    for (const locale of TARGET_LOCALES) {
      const translation = translations[locale]

      if (!force) {
        const existing = await payload.findByID({
          collection: 'case-studies',
          id: doc.id,
          locale,
          fallbackLocale: false,
          depth: 0,
        })

        if (existing.title && existing.title !== '') {
          console.log(`skipped ${slug}/${locale} (already has translation; pass --force to overwrite)`)
          continue
        }
      }

      await applyTranslation(payload, doc, locale, translation)
      console.log(`translated ${slug} → ${locale}`)
    }
  }

  process.exit(0)
}

const applyTranslation = async (
  payload: Awaited<ReturnType<typeof import('payload').getPayload>>,
  doc: { id: number | string; keyFeatures?: unknown; tags?: unknown; award?: unknown },
  locale: TargetLocale,
  translation: CaseStudyTranslation,
): Promise<void> => {
  const sourceKeyFeatures = Array.isArray(doc.keyFeatures) ? (doc.keyFeatures as Array<{ id?: string; number: string }>) : []
  const sourceTags = Array.isArray(doc.tags) ? (doc.tags as Array<{ id?: string }>) : []

  if (sourceKeyFeatures.length !== translation.keyFeatures.length) {
    throw new Error(
      `keyFeatures length mismatch for ${doc.id} in ${locale}: source has ${sourceKeyFeatures.length}, translation has ${translation.keyFeatures.length}`,
    )
  }
  if (sourceTags.length !== translation.tags.length) {
    throw new Error(
      `tags length mismatch for ${doc.id} in ${locale}: source has ${sourceTags.length}, translation has ${translation.tags.length}`,
    )
  }

  // Preserve array row IDs so Payload updates the localized columns on the
  // existing rows instead of replacing the whole array. `number` is shared
  // across locales and stays as-is.
  const keyFeatures = sourceKeyFeatures.map((kf, i) => ({
    id: kf.id,
    number: kf.number,
    title: translation.keyFeatures[i].title,
    description: translation.keyFeatures[i].description,
  }))

  const tags = sourceTags.map((t, i) => ({
    id: t.id,
    tag: translation.tags[i],
  }))

  const data: Record<string, unknown> = {
    title: translation.title,
    description: translation.description,
    keyFeatures,
    tags,
  }

  if (translation.award) {
    data.award = {
      ...(doc.award && typeof doc.award === 'object' ? doc.award : {}),
      ...translation.award,
    }
  }

  await payload.update({
    collection: 'case-studies',
    id: doc.id,
    locale,
    data,
  })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
