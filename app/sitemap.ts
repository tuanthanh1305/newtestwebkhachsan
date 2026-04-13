import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com';
  return [
    {url: `${base}/vi`, lastModified: new Date()},
    {url: `${base}/en`, lastModified: new Date()}
  ];
}
