'use client';

<<<<<<< HEAD
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';

export function LanguageSwitcher({locale}: {locale: 'vi' | 'en'}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (nextLocale: 'vi' | 'en') => {
=======
import {usePathname, useRouter} from 'next/navigation';
import type {Locale} from '@/lib/i18n';

export function LanguageSwitcher({locale}: {locale: Locale}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: Locale) => {
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
    const nextPath = pathname.replace(/^\/(vi|en)/, `/${nextLocale}`);
    localStorage.setItem('preferred-language', nextLocale);
    router.push(nextPath || `/${nextLocale}`);
  };

  return (
<<<<<<< HEAD
    <div className="flex items-center gap-2">
      <button aria-label="Switch to Vietnamese" onClick={() => switchTo('vi')} className={`rounded px-3 py-1 text-sm ${locale === 'vi' ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}>
        VI
      </button>
      <button aria-label="Switch to English" onClick={() => switchTo('en')} className={`rounded px-3 py-1 text-sm ${locale === 'en' ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}>
        EN
      </button>
      <Link className="sr-only" href={locale === 'vi' ? '/en' : '/vi'}>
        alternate language
      </Link>
=======
    <div className="flex items-center rounded-full border p-1 text-xs">
      <button
        aria-label="Switch to Vietnamese"
        onClick={() => switchLocale('vi')}
        className={`rounded-full px-3 py-1 ${locale === 'vi' ? 'bg-slate-900 text-white' : 'text-slate-700'}`}
      >
        VI
      </button>
      <button
        aria-label="Switch to English"
        onClick={() => switchLocale('en')}
        className={`rounded-full px-3 py-1 ${locale === 'en' ? 'bg-slate-900 text-white' : 'text-slate-700'}`}
      >
        EN
      </button>
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
    </div>
  );
}
