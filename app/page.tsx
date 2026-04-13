import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import {detectLocale} from '@/lib/i18n';

export default async function IndexPage() {
  const acceptLanguage = (await headers()).get('accept-language');
  const locale = detectLocale(acceptLanguage);
  redirect(`/${locale}`);
}
