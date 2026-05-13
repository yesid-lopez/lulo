# lulo CMS

Payload CMS that backs the [lulo landing site](https://luloai.com). Lives at [cms.luloai.com](https://cms.luloai.com/admin) in production; serves case studies (and their media) over the REST API.

Stack: Payload 3 · Next.js 15 · Postgres (CloudNativePG in the homelab cluster) · MinIO for media (served publicly at `media.luloai.com/payload-media/...`).

## Local development

Prereqs: Node ^18.20 or >=20.9, `pnpm`, Docker (only if you want the bundled Postgres).

```bash
cp .env.example .env
# Fill in DATABASE_URI + PAYLOAD_SECRET at minimum.

pnpm install
pnpm dev                # http://localhost:3000/admin
```

For a one-command stack with a local Postgres, `docker-compose up` brings up Postgres on `5432` and the dev server on `3000` (uses `.env`).

## Content seeding

Case studies live in git as **seed scripts** so a fresh database can be bootstrapped and new entries get a code-reviewed first draft. Seeds are idempotent — they create a record only if it doesn't exist (`--force` overwrites).

**Why seeds and not migrations:** migrations are for schema changes only. The moment an editor changes a record from the admin UI, a content migration becomes a lie, and its `down()` would erase whatever the editor saved. The admin UI is the source of truth for content; seeds are just the typed, reviewable initial state.

### Layout

```
cms/src/seed/
  index.ts                      # CLI entry point
  case-studies/
    index.ts                    # array of all case-study seeds
    <slug>.ts                   # one file per case study
```

### Adding a new seed

1. Create `cms/src/seed/case-studies/<slug>.ts` exporting `slug` + `data` (matching the case-studies collection shape).
2. Append the module's `data` to the array in `cms/src/seed/case-studies/index.ts`.

### Running

```bash
pnpm seed                       # seeds everything; skips existing rows
pnpm seed <slug>                # one row
pnpm seed <slug> --force        # overwrite existing (use sparingly)
```

By default the script uses the Payload Local API against whatever `DATABASE_URI` resolves to in your shell / `.env` — i.e. your local DB.

### Seeding production

```bash
pnpm seed:prod                  # SEED_ENV=prod under the hood
```

This loads `cms/.env.prod` (override of `.env`) and goes through the **REST API** at `CMS_URL`, authenticating with `CMS_EMAIL` + `CMS_PASSWORD`. No DB port-forward needed. Skips existing rows; pass `--force` to overwrite.

`cms/.env.prod` is gitignored — don't commit credentials. Same flag set works for any other env (`SEED_ENV=staging` loads `.env.staging`, etc.).

## Releases & deployment

Production runs the `registry.yesidlopez.de/lulo-cms` image in the homelab cluster (see [yesid-lopez/homelab `apps/production/lulo-cms/`](https://github.com/yesid-lopez/homelab/tree/main/apps/production/lulo-cms)).

The `cms-publish` GitHub workflow is triggered by **publishing a GitHub Release** with tag `cms-vX.Y.Z`:

```bash
gh release create cms-v1.4.0 --target main --title "cms-v1.4.0" --notes "…"
```

That builds a multi-arch image, pushes it to the registry, and Flux's image-update-automation rolls the deployment.

## Useful commands

```bash
pnpm dev                        # dev server
pnpm devsafe                    # clean .next then dev
pnpm build                      # production build
pnpm start                      # production server (after build)
pnpm lint                       # ESLint
pnpm test:int                   # vitest integration tests
pnpm generate:types             # regenerate payload-types.ts after schema changes
pnpm generate:importmap         # regenerate admin import map
pnpm payload migrate            # run pending migrations
pnpm payload migrate:create     # scaffold a new migration
```

## Collections

- **Users** — auth, admin panel access.
- **Media** — uploaded files, persisted in the `payload-media` MinIO bucket (public-read in prod via `media.luloai.com`).
- **Case Studies** — featured projects + hackathon entries. The landing site fetches `published` ones via `/api/case-studies?depth=1` and renders them at `luloai.com/case-studies`.
