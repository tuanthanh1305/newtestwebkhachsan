# Multilingual translation architecture

```mermaid
flowchart TD
  A[User visits /] --> B{Has saved preference?}
  B -- Yes --> C[Read localStorage preferred-language]
  B -- No --> D[Detect navigator.language + locale]
  C --> E{Supported? vi/en}
  D --> E
  E -- Yes --> F[Redirect to /vi or /en]
  E -- No --> G[Render default locale + dynamic translation API]
  G --> H[Cache translation in edge KV/local cache]
  F --> I[Load pre-generated SSG page + JSON dictionary]
  I --> J[Hydration-safe language switcher]
  J --> K[Set hreflang + canonical + schema per locale]
```

## Mode 1 (SEO-safe)
- `vi` and `en` pages are statically generated.
- Full metadata/hreflang/canonical are language-specific.

## Mode 2 (AI dynamic)
- For unsupported languages (`/fr`, `/ja`, etc.) you can add middleware fallback to runtime translation API.
- Caching layer stores translated segments to reduce cost and latency.
