<<<<<<< HEAD
# AI-first SEO Rebuild: InterContinental Hanoi Westlake (Bilingual)

## 1) Full source code
This repo contains a Next.js 16 + TypeScript + Tailwind + App Router implementation with bilingual routing (`/vi`, `/en`) and AI-ready semantic content blocks.

## 2) Folder structure

- `app/` — routes, layouts, metadata, sitemap, robots
- `app/[locale]/` — locale homepage with schema + FAQ
- `components/` — language switcher + auto-language redirect
- `messages/` — Vietnamese/English content dictionaries
- `docs/content-audit.md` — extraction and structure mapping
- `docs/translation-architecture.md` — translation design diagram

## 3) Deploy to Vercel
1. Install dependencies: `npm install`
2. Build: `npm run build`
3. Push to GitHub
4. Import project in Vercel
5. Set production domain and update `metadataBase` + sitemap domain

## 4) SEO checklist (implemented)
- [x] Per-locale title and meta description
- [x] Canonical and hreflang alternates
- [x] JSON-LD (Hotel + FAQPage)
- [x] Robots.txt
- [x] Sitemap.xml
- [x] Semantic heading hierarchy (single H1)
- [x] Internal conversion CTA sections

## 5) Suggested improvements
- Add dedicated pages: `/rooms`, `/dining`, `/weddings`, `/meetings`, `/contact`
- Add CMS (Sanity/Contentful) for marketing team updates
- Implement edge KV caching for AI dynamic translation mode
- Add real testimonials + review schema

## 6) Multilingual system explanation
- Detect locale from saved preference first, then browser language.
- Redirect to localized route without full reload using Next navigation.
- Use static dictionaries for Vietnamese + English (SEO-safe).
- Extend with runtime translation API for unsupported locales.

## 7) Translation architecture diagram
See: `docs/translation-architecture.md`.

## Notes on source extraction
Because the source site is content-rich and partially dynamic, this rebuild includes a practical extraction baseline from key homepage sections (hero, rooms, dining, offers/contact context), preserving original meaning while optimizing copy for readability and AI/SEO discoverability.
=======
# InterContinental Hanoi Westlake – Next.js multilingual rebuild

## Quick start (local)
```bash
npm install
npm run typecheck
npm run build
npm run start
```

Open `http://localhost:3000`.

## Deploy from GitHub to Vercel
This repository includes:
- `.github/workflows/ci.yml` (install + typecheck + build on push/PR)
- `.github/workflows/deploy-vercel.yml` (production deploy on `main`/`master`)

Required GitHub Action secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## Docker package (run immediately)
Build image:
```bash
docker build -t ic-westlake-site .
```

Run:
```bash
docker run --rm -p 3000:3000 ic-westlake-site
```

Or with compose:
```bash
docker compose up --build
```

## Current architecture
- Locale routes: `/vi`, `/en`
- Pages: home, rooms, dining, offers, contact
- SEO: metadata alternates, FAQ schema, sitemap, robots
- Content model in `lib/site-content.ts`

## Notes
- If your environment blocks npm registry access, run installation/build in CI or on a machine with registry access.
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
