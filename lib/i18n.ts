export const locales = ['vi', 'en'] as const;
export type Locale = (typeof locales)[number];

export async function getMessages(locale: Locale) {
  return (await import(`../messages/${locale}.json`)).default;
}
