'use client';

import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';

export function LanguageSwitcher({locale}: {locale: 'vi' | 'en'}) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (nextLocale: 'vi' | 'en') => {
    const nextPath = pathname.replace(/^\/(vi|en)/, `/${nextLocale}`);
    localStorage.setItem('preferred-language', nextLocale);
    router.push(nextPath || `/${nextLocale}`);
  };

  return (
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
    </div>
  );
}
