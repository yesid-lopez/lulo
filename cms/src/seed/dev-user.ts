import type { Payload } from 'payload'

/**
 * Ensure a default admin user exists for local development.
 *
 * Never runs against prod: bails out if SEED_ENV=prod or NODE_ENV=production.
 * Credentials are overridable via CMS_DEV_EMAIL / CMS_DEV_PASSWORD.
 */
export const ensureDevUser = async (payload: Payload): Promise<void> => {
  if (process.env.SEED_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    return
  }

  const email = process.env.CMS_DEV_EMAIL || 'admin@admin.com'
  const password = process.env.CMS_DEV_PASSWORD || 'admin'

  const existing = await payload.find({
    collection: 'users',
    where: { email: { equals: email } },
    limit: 1,
    depth: 0,
  })

  if (existing.docs.length > 0) {
    console.log(`dev user ${email} already exists (skipped)`)
    return
  }

  await payload.create({
    collection: 'users',
    data: { email, password },
  })
  console.log(`created dev user ${email} / ${password}`)
}
