export const locales = ['vi', 'en'] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return 'vi';
  return acceptLanguage.toLowerCase().includes('vi') ? 'vi' : 'en';
}
