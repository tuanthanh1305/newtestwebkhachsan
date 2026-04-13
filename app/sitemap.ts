import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://hanoi.intercontinental.com';
  const paths = ['', '/rooms', '/dining', '/offers', '/contact'];

  return ['vi', 'en'].flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const
    }))
  );
}
