'use client';

import {useEffect} from 'react';
import {usePathname, useRouter} from 'next/navigation';
<<<<<<< HEAD

export function AutoLanguageRedirect({locale}: {locale: 'vi' | 'en'}) {
=======
import type {Locale} from '@/lib/i18n';

export function AutoLanguageRedirect({locale}: {locale: Locale}) {
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
<<<<<<< HEAD
    const saved = localStorage.getItem('preferred-language') as 'vi' | 'en' | null;
    const browser = navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en';
    const target = saved || browser;

    if (target !== locale) {
      const nextPath = pathname.replace(/^\/(vi|en)/, `/${target}`);
      router.replace(nextPath || `/${target}`);
    }
=======
    const saved = localStorage.getItem('preferred-language') as Locale | null;
    if (!saved || saved === locale) return;
    const nextPath = pathname.replace(/^\/(vi|en)/, `/${saved}`);
    router.replace(nextPath || `/${saved}`);
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
  }, [locale, pathname, router]);

  return null;
}
