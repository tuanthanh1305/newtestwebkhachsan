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
