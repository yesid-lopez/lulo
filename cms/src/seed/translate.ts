/**
 * One-shot translation seed.
 *
 * Walks every case-study, fetches the English version, and fills in the
 * Spanish/German locales for the fields marked `localized: true` on the
 * `case-studies` collection. Empty target-locale values are filled by calling
 * the translation provider; existing target-locale values are left untouched
 * so the script is idempotent. Pass `--force` to overwrite existing
 * translations.
 *
 * Usage:
 *   DEEPL_API_KEY=... pnpm seed:translate                       # all locales
 *   DEEPL_API_KEY=... pnpm seed:translate --locale es           # one locale
 *   DEEPL_API_KEY=... pnpm seed:translate --slug photofolio     # one study
 *   DEEPL_API_KEY=... pnpm seed:translate --force               # overwrite
 *   TRANSLATION_PROVIDER=stub pnpm seed:translate               # dry run
 */
import { config as loadDotenv } from 'dotenv'
import { existsSync } from 'fs'
import { resolve } from 'path'

import type { CaseStudy } from '../payload-types'

type Locale = 'en' | 'es' | 'de'

const TARGET_LOCALES: Exclude<Locale, 'en'>[] = ['es', 'de']

type TranslationProvider = {
  translate: (text: string, target: Exclude<Locale, 'en'>) => Promise<string>
}

const buildProvider = (): TranslationProvider => {
  const choice = (process.env.TRANSLATION_PROVIDER ?? 'deepl').toLowerCase()
  if (choice === 'stub') return stubProvider()
  if (choice === 'deepl') return deeplProvider()
  throw new Error(`Unknown TRANSLATION_PROVIDER: ${choice}. Expected one of: deepl, stub.`)
}

// Returns the input wrapped with a locale tag. Useful for dry-runs in CI or
// when DEEPL_API_KEY is not available locally.
const stubProvider = (): TranslationProvider => ({
  translate: async (text, target) => `[${target}] ${text}`,
})

// DeepL free tier endpoint. The free and pro tiers use different hostnames;
// keys that end in `:fx` are free-tier. https://developers.deepl.com/docs
const deeplProvider = (): TranslationProvider => {
  const apiKey = process.env.DEEPL_API_KEY
  if (!apiKey) {
    throw new Error('DEEPL_API_KEY is required when TRANSLATION_PROVIDER=deepl (the default).')
  }
  const endpoint = apiKey.endsWith(':fx')
    ? 'https://api-free.deepl.com/v2/translate'
    : 'https://api.deepl.com/v2/translate'

  return {
    translate: async (text, target) => {
      if (!text) return text
      const body = new URLSearchParams({
        text,
        source_lang: 'EN',
        target_lang: target.toUpperCase(),
        preserve_formatting: '1',
      })
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `DeepL-Auth-Key ${apiKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body,
      })
      if (!res.ok) {
        throw new Error(`DeepL request failed (${res.status}): ${await res.text()}`)
      }
      const json = (await res.json()) as { translations?: Array<{ text: string }> }
      const translated = json.translations?.[0]?.text
      if (!translated) throw new Error('DeepL response did not include a translation.')
      return translated
    },
  }
}

type TranslateOptions = {
  force: boolean
  slug?: string
  locales: Exclude<Locale, 'en'>[]
}

const parseArgs = (argv: string[]): TranslateOptions => {
  const opts: TranslateOptions = { force: false, locales: TARGET_LOCALES }
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--force') opts.force = true
    else if (arg === '--slug') opts.slug = argv[++i]
    else if (arg === '--locale') {
      const next = argv[++i] as Exclude<Locale, 'en'>
      if (!TARGET_LOCALES.includes(next)) {
        throw new Error(`--locale must be one of: ${TARGET_LOCALES.join(', ')}`)
      }
      opts.locales = [next]
    }
  }
  return opts
}

const isBlank = (value: string | null | undefined): boolean =>
  value === null || value === undefined || value.trim() === ''

const main = async (): Promise<void> => {
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

  const opts = parseArgs(process.argv.slice(2))
  const provider = buildProvider()

  const { getPayload } = await import('payload')
  const { default: configPromise } = await import('@payload-config')
  const payload = await getPayload({ config: configPromise })

  const where = opts.slug ? { slug: { equals: opts.slug } } : undefined

  const englishDocs = await payload.find({
    collection: 'case-studies',
    where,
    locale: 'en',
    fallbackLocale: false,
    limit: 500,
    depth: 0,
  })

  if (englishDocs.docs.length === 0) {
    console.log('No case studies found to translate.')
    process.exit(0)
  }

  for (const doc of englishDocs.docs as CaseStudy[]) {
    for (const locale of opts.locales) {
      const existing = await payload.findByID({
        collection: 'case-studies',
        id: doc.id,
        locale,
        fallbackLocale: false,
        depth: 0,
      })

      const patch: Record<string, unknown> = {}

      const setIfNeeded = async (
        path: string,
        source: string | null | undefined,
        target: string | null | undefined,
        assign: (value: string) => void,
      ) => {
        if (isBlank(source)) return
        if (!opts.force && !isBlank(target)) return
        const translated = await provider.translate(source as string, locale)
        assign(translated)
        console.log(`  ${path} → ${locale}`)
      }

      await setIfNeeded(
        'title',
        doc.title,
        (existing as CaseStudy).title,
        (v) => (patch.title = v),
      )
      await setIfNeeded(
        'description',
        doc.description,
        (existing as CaseStudy).description,
        (v) => (patch.description = v),
      )

      if (doc.award) {
        const award: Record<string, unknown> = {}
        await setIfNeeded(
          'award.title',
          doc.award.title,
          (existing as CaseStudy).award?.title,
          (v) => (award.title = v),
        )
        await setIfNeeded(
          'award.event',
          doc.award.event,
          (existing as CaseStudy).award?.event,
          (v) => (award.event = v),
        )
        if (Object.keys(award).length > 0) patch.award = award
      }

      const sourceFeatures = doc.keyFeatures ?? []
      const existingFeatures = (existing as CaseStudy).keyFeatures ?? []
      const translatedFeatures: Array<Record<string, unknown>> = []
      let featuresChanged = false
      for (let i = 0; i < sourceFeatures.length; i++) {
        const src = sourceFeatures[i]
        const dst = existingFeatures[i]
        const merged: Record<string, unknown> = { ...src }
        await setIfNeeded(
          `keyFeatures[${i}].title`,
          src.title,
          dst?.title,
          (v) => {
            merged.title = v
            featuresChanged = true
          },
        )
        await setIfNeeded(
          `keyFeatures[${i}].description`,
          src.description,
          dst?.description,
          (v) => {
            merged.description = v
            featuresChanged = true
          },
        )
        translatedFeatures.push(merged)
      }
      if (featuresChanged) patch.keyFeatures = translatedFeatures

      const sourceTags = doc.tags ?? []
      const existingTags = (existing as CaseStudy).tags ?? []
      const translatedTags: Array<Record<string, unknown>> = []
      let tagsChanged = false
      for (let i = 0; i < sourceTags.length; i++) {
        const src = sourceTags[i]
        const dst = existingTags[i]
        const merged: Record<string, unknown> = { ...src }
        await setIfNeeded(
          `tags[${i}].tag`,
          src.tag,
          dst?.tag,
          (v) => {
            merged.tag = v
            tagsChanged = true
          },
        )
        translatedTags.push(merged)
      }
      if (tagsChanged) patch.tags = translatedTags

      if (Object.keys(patch).length === 0) {
        console.log(`case-studies/${doc.slug} (${locale}): up to date`)
        continue
      }

      await payload.update({
        collection: 'case-studies',
        id: doc.id,
        locale,
        data: patch,
      })
      console.log(`case-studies/${doc.slug} (${locale}): updated`)
    }
  }

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
