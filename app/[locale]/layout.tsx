import Link from 'next/link';
import {notFound} from 'next/navigation';
import {LanguageSwitcher} from '@/components/LanguageSwitcher';
import {isLocale, locales, type Locale} from '@/lib/i18n';
import {getSiteContent} from '@/lib/site-content';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  const t = getSiteContent(locale as Locale);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href={`/${locale}`} className="font-semibold tracking-wide">
            InterContinental Hanoi Westlake
          </Link>
          <nav className="hidden gap-5 text-sm md:flex">
            <Link href={`/${locale}`}>{t.nav.home}</Link>
            <Link href={`/${locale}/rooms`}>{t.nav.rooms}</Link>
            <Link href={`/${locale}/dining`}>{t.nav.dining}</Link>
            <Link href={`/${locale}/offers`}>{t.nav.offers}</Link>
            <Link href={`/${locale}/contact`}>{t.nav.contact}</Link>
          </nav>
          <LanguageSwitcher locale={locale as Locale} />
        </div>
      </header>
      {children}
      <footer className="mt-16 border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
          © InterContinental Hanoi Westlake · {t.contact.address}
        </div>
      </footer>
    </div>
  );
}
