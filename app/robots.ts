import type {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{userAgent: '*', allow: '/'}],
<<<<<<< HEAD
    sitemap: 'https://example.com/sitemap.xml'
=======
    sitemap: 'https://hanoi.intercontinental.com/sitemap.xml'
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
  };
}
