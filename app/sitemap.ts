import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
<<<<<<< HEAD
  const base = 'https://example.com';
  return [
    {url: `${base}/vi`, lastModified: new Date()},
    {url: `${base}/en`, lastModified: new Date()}
  ];
=======
  const base = 'https://hanoi.intercontinental.com';
  const paths = ['', '/rooms', '/dining', '/offers', '/contact'];

  return ['vi', 'en'].flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const
    }))
  );
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
}
