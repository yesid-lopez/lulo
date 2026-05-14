# lulo landing

Marketing site for [lulo](https://luloai.com) — the public face that lists services, case studies, and the contact form. The `cms/` sibling directory holds the Payload CMS that this site reads from; see [`cms/README.md`](./cms/README.md) for its setup.

Stack: Next.js 15 (App Router, Turbopack) · React 19 · TypeScript · Tailwind 4 · `lucide-react` icons · Poppins + Sora via `next/font`.

## What's here

- **Pages** — home, [`/about-us`](src/app/about-us), [`/case-studies`](src/app/case-studies), [`/contact-us`](src/app/contact-us), and legal pages ([`/privacy`](src/app/privacy), [`/terms`](src/app/terms), [`/cookies`](src/app/cookies)).
- **i18n** — three locales (en / es / de) via a lightweight in-memory `TranslationProvider` in [`src/hooks/TranslationProvider.tsx`](src/hooks/TranslationProvider.tsx). Strings live in [`src/utils/translations.ts`](src/utils/translations.ts); the active language is persisted in `localStorage` and toggled by [`LanguageSwitcher`](src/components/LanguageSwitcher.tsx).
- **Case studies** — fetched at request time from the Payload CMS at `cms.luloai.com` (`/api/case-studies?depth=1`) and rendered by [`CmsCaseStudiesShowcase`](src/components/CmsCaseStudiesShowcase.tsx). Mockup images are served from either `cms.luloai.com/api/media/file/...` or the public MinIO bucket at `media.luloai.com/payload-media/...` — both are allowlisted in [`next.config.ts`](next.config.ts).
- **Contact form** — posts to [`POST /api/send-email`](src/app/api/send-email/route.ts). The route currently validates and logs the submission; email delivery is not yet wired up.
- **SEO** — metadata helpers in [`src/lib/seo.ts`](src/lib/seo.ts), plus [`sitemap.ts`](src/app/sitemap.ts) and [`robots.ts`](src/app/robots.ts).
- **Analytics** — Umami snippet loaded only in production from `umami.yesidlopez.de` (see [`src/app/layout.tsx`](src/app/layout.tsx)).

## Getting started

Prereqs: Node 20+ and npm.

```bash
npm install
npm run dev          # http://localhost:3000
```

There is no `.env.example` for the landing site — it does not currently require any env vars to run locally. The CMS endpoint is hardcoded to `cms.luloai.com`, so case studies will load against production unless you point that elsewhere.

## Scripts

```bash
npm run dev          # dev server with Turbopack
npm run build        # production build
npm run start        # serve the production build
npm run lint         # ESLint (next/core-web-vitals)
```

## Repository layout

```
.
├── src/
│   ├── app/                 # App Router pages, API routes, sitemap, robots
│   ├── components/          # Navigation, Footer, case-study showcase, etc.
│   ├── hooks/               # TranslationProvider, useContactForm, useTranslation
│   ├── lib/                 # seo helpers
│   └── utils/               # static translations + case-study fallback data
├── public/                  # logo, team photos, case-study assets
├── cms/                     # Payload CMS (own package, own README)
└── .github/workflows/       # cms-publish.yml (CMS image build & push)
```

The CMS is a separate package with its own `package.json`, lockfile, and Docker setup — work on it from inside `cms/`. There is no CI workflow for the landing site itself yet; the only workflow in this repo builds and publishes the CMS container.

## Related

- **Production site**: <https://luloai.com>
- **CMS admin**: <https://cms.luloai.com/admin> · source: [`cms/`](./cms)
- **Infra / deployment manifests**: [yesid-lopez/homelab](https://github.com/yesid-lopez/homelab)
