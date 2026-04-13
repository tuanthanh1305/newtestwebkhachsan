import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'InterContinental Hanoi Westlake | Luxury Lakefront Hotel',
  description:
    'A modern bilingual hotel experience rebuilt for AI search, SEO, and high-performance web delivery.',
  alternates: {
    canonical: '/',
    languages: {
      vi: '/vi',
      en: '/en'
    }
  },
  openGraph: {
    title: 'InterContinental Hanoi Westlake',
    description: 'Luxury resort over West Lake with premium rooms, dining, and events.',
    type: 'website'
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
