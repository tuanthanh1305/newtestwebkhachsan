export const locales = ['vi', 'en'] as const;
export type Locale = (typeof locales)[number];

<<<<<<< HEAD
export async function getMessages(locale: Locale) {
  return (await import(`../messages/${locale}.json`)).default;
=======
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return 'vi';
  return acceptLanguage.toLowerCase().includes('vi') ? 'vi' : 'en';
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
}
