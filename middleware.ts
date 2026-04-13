import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {detectLocale} from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  if (pathname === '/') {
    const locale = detectLocale(request.headers.get('accept-language'));
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/']
};
