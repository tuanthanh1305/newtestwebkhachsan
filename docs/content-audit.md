# Source content extraction audit (InterContinental Hanoi Westlake)

## Crawl target
- Primary URL: `https://hanoi.intercontinental.com/vn`
- Audit date: **2026-04-13 (UTC)**
- Industry: Hotel / Tourism / Service
- Target audience: International + domestic travelers

## Crawl constraints and method
- Direct command-line crawl (`curl`) returned **HTTP 403** from the origin in this environment.
- Therefore, extraction relied on:
  1. Search-engine indexed snippets.
  2. Existing public section URLs referenced by the source domain structure.
  3. On-site brand entities reflected consistently across official pages.

## Site structure map extracted
- Homepage (`/vn`)
- Rooms & Suites (room categories and overwater positioning)
- Dining (Sunset Bar, Café du Lac, Milan, Saigon)
- Offers (seasonal promotions / celebration packages)
- Meetings & Events / Weddings
- Contact & reservation details

## Key content entities captured
- Brand: **InterContinental Hanoi Westlake**
- Location: **5 Tu Hoa Street, Tay Ho District, Hanoi, Vietnam**
- Phone: **+84 24 6270 8888**
- Email: **reservations.icwestlake@ihg.com**
- USP cluster:
  - Overwater/lakeside luxury positioning
  - Sunset Bar signature experience
  - Business + wedding/event capability

## Headings/topics cluster used in rebuild
- Hero value proposition
- Rooms & suites highlights
- Dining outlets and culinary positioning
- Special offers and package messaging
- Trust and conversion block (testimonials + contact CTA)
- FAQ for AI snippets and voice assistant retrieval

## Media extraction status
- Source site media host patterns retained where accessible:
  - `d3rx7ba35c2ox5.cloudfront.net`
  - `hanoi.intercontinental.com`
- Representative hero/highlight imagery is referenced from source-aligned assets.

## Metadata and SEO notes
- Locale-specific titles/descriptions implemented for `vi` + `en`.
- LocalBusiness/Hotel and FAQ structured data included on homepage.
- Language alternates and canonical strategy implemented per locale.
