'use client';

import {usePathname, useRouter} from 'next/navigation';
import type {Locale} from '@/lib/i18n';

export function LanguageSwitcher({locale}: {locale: Locale}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: Locale) => {
    const nextPath = pathname.replace(/^\/(vi|en)/, `/${nextLocale}`);
    localStorage.setItem('preferred-language', nextLocale);
    router.push(nextPath || `/${nextLocale}`);
  };

  return (
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
    </div>
  );
}
