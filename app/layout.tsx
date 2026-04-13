import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hanoi.intercontinental.com'),
  title: 'InterContinental Hanoi Westlake',
  description: 'Luxury overwater resort in Hanoi.',
  openGraph: {
    title: 'InterContinental Hanoi Westlake',
    description: 'Luxury overwater resort in Hanoi',
    type: 'website',
    locale: 'vi_VN'
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
