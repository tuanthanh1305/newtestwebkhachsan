# InterContinental Hanoi Westlake — AI-first SEO Rebuild (Next.js + Vercel)

Modern bilingual hotel website rebuilt with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, and an **AI-ready content model** designed for Google SGE / AI Search discoverability.

## 1) Full source code
This repository includes:
- Full multilingual web app source (`/vi`, `/en`).
- Structured hotel content model for semantic SEO.
- Rewritten marketing copy (Vietnamese + English) preserving source meaning.
- AI-search friendly FAQ and JSON-LD schema.

## 2) Folder structure

```txt
app/
  [locale]/
    page.tsx                # Homepage (hero, highlights, FAQ, testimonials)
    rooms/page.tsx          # Rooms
    dining/page.tsx         # Dining
    offers/page.tsx         # Offers
    contact/page.tsx        # Contact + lead form UI
    layout.tsx              # Locale nav/footer + language switch
  layout.tsx                # Global metadata
  page.tsx                  # Root language redirect
  sitemap.ts                # SEO sitemap
  robots.ts                 # SEO robots
components/
  LanguageSwitcher.tsx      # Client locale switching + preference persist
  AutoLanguageRedirect.tsx  # Client-side preferred-language redirect
lib/
  i18n.ts                   # Locale helpers + accept-language detection
  site-content.ts           # Bilingual SEO content model
docs/
  content-audit.md          # Source extraction map + crawl findings
  translation-architecture.md
middleware.ts               # Edge redirect for '/'
next.config.ts              # Image optimization + standalone output
```

## 3) Deploy to Vercel

### Local validation
```bash
npm install
npm run typecheck
npm run build
npm run start
```

### Vercel deployment
1. Push repository to GitHub/GitLab/Bitbucket.
2. Import project into Vercel.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`.
5. Output: `.next` (default).
6. Deploy.

## 4) SEO checklist (implemented)
- [x] Per-locale metadata (`title`, `description`).
- [x] Canonical + `hreflang` alternates on localized pages.
- [x] Structured data (Hotel + FAQPage via JSON-LD).
- [x] `sitemap.xml` with locale routes and key pages.
- [x] `robots.txt` with sitemap declaration.
- [x] Semantic heading hierarchy (one H1/page).
- [x] Internal linking across Home / Rooms / Dining / Offers / Contact.
- [x] Fast image delivery via Next `<Image>` with AVIF/WebP enabled.

## 5) Suggested improvements
- Add booking engine deep-link tracking (UTM + conversion events).
- Connect real CMS (Sanity/Contentful/Strapi) for non-dev content updates.
- Add Review/AggregateRating schema from verified first-party data.
- Add server-side dynamic translation cache (Redis/Upstash) for non-vi/en locales.
- Add E2E tests (Playwright) + Lighthouse CI budget gates.

## 6) Multilingual system explanation
- **Mode 1 (SEO-safe):** pre-generated static content in Vietnamese and English.
- **Language detection:**
  - Edge (`middleware.ts`): detects `Accept-Language` and redirects `/` to `/vi` or `/en`.
  - Client (`AutoLanguageRedirect`): honors saved `preferred-language` from localStorage.
- **Language switcher:** updates URL and persists language preference.
- **Routing strategy:** clean locale prefixes (`/vi`, `/en`) suitable for SEO + hreflang.

## 7) Translation architecture diagram
See `docs/translation-architecture.md`.
