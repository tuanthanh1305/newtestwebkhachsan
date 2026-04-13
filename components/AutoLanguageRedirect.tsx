'use client';

import {useEffect} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import type {Locale} from '@/lib/i18n';

export function AutoLanguageRedirect({locale}: {locale: Locale}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('preferred-language') as Locale | null;
    if (!saved || saved === locale) return;

    const nextPath = pathname.replace(/^\/(vi|en)/, `/${saved}`);
    router.replace(nextPath || `/${saved}`);
  }, [locale, pathname, router]);

  return null;
}
