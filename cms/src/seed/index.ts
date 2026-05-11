import { getPayload, type Payload } from 'payload'
import configPromise from '@payload-config'

import { caseStudies } from './case-studies'

const main = async (): Promise<void> => {
  const args = process.argv.slice(2)
  const force = args.includes('--force')
  const slugFilter = args.find((arg) => !arg.startsWith('--'))

  const allSlugs = caseStudies.map((c) => c.slug)
  if (slugFilter && !allSlugs.includes(slugFilter)) {
    console.error(`No seed found for "${slugFilter}". Available: ${allSlugs.join(', ')}`)
    process.exit(1)
  }

  const payload = await getPayload({ config: configPromise })

  await seedCaseStudies(payload, slugFilter, force)

  process.exit(0)
}

const seedCaseStudies = async (
  payload: Payload,
  slugFilter: string | undefined,
  force: boolean,
): Promise<void> => {
  const targets = slugFilter ? caseStudies.filter((c) => c.slug === slugFilter) : caseStudies

  for (const data of targets) {
    const existing = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: data.slug } },
      limit: 1,
      depth: 0,
    })

    if (existing.docs.length > 0) {
      if (force) {
        await payload.update({
          collection: 'case-studies',
          id: existing.docs[0].id,
          data,
        })
        console.log(`updated case-studies/${data.slug}`)
      } else {
        console.log(
          `skipped case-studies/${data.slug} (already exists; pass --force to overwrite)`,
        )
      }
      continue
    }

    await payload.create({ collection: 'case-studies', data })
    console.log(`created case-studies/${data.slug}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
