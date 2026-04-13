'use client';

import {useEffect} from 'react';
import {usePathname, useRouter} from 'next/navigation';

export function AutoLanguageRedirect({locale}: {locale: 'vi' | 'en'}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('preferred-language') as 'vi' | 'en' | null;
    const browser = navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en';
    const target = saved || browser;

    if (target !== locale) {
      const nextPath = pathname.replace(/^\/(vi|en)/, `/${target}`);
      router.replace(nextPath || `/${target}`);
    }
  }, [locale, pathname, router]);

  return null;
}
