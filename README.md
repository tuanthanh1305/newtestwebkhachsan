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
