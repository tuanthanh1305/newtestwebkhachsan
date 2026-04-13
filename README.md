# InterContinental Hanoi Westlake – Modern SEO + AI-ready Rebuild

## What was fixed for Vercel deployment
- Removed fragile i18n middleware dependency chain and switched to a stable locale architecture (`/vi`, `/en`) with server-side redirect from `/`.
- Downgraded to a widely stable stack for Vercel compatibility: Next.js 15 + React 18.
- Fixed image host configuration for CloudFront assets from the original website.
- Added static locale params and safe locale validation to avoid runtime route errors.

## Implemented pages
- `/vi`, `/en` (homepage)
- `/vi/rooms`, `/en/rooms`
- `/vi/dining`, `/en/dining`
- `/vi/offers`, `/en/offers`
- `/vi/contact`, `/en/contact`

## SEO implemented
- Per-locale metadata and canonical/hreflang alternates
- JSON-LD schema (`Hotel`, `FAQPage`)
- `robots.txt`
- `sitemap.xml` (all locale pages)
- semantic heading hierarchy and internal linking

## Performance
- Optimized Next/Image usage with AVIF/WebP support
- Remote image allowlist for original media CDN
- Lightweight component structure and route-level code splitting

## Deployment (Vercel)
1. `npm install`
2. `npm run build`
3. Push to GitHub
4. Import repo in Vercel
5. Deploy

> If your environment blocks npm registry access, run steps above on your local machine or CI with standard npm network access.
