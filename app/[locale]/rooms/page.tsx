import Image from 'next/image';
import {notFound} from 'next/navigation';
import {isLocale} from '@/lib/i18n';
import {getSiteContent, hotelImages} from '@/lib/site-content';

export default async function RoomsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  const t = getSiteContent(locale);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-bold">{t.nav.rooms}</h1>
      <p className="mt-3 text-slate-600">InterContinental Hanoi Westlake offers rooms, suites, and overwater residences with elegant Vietnamese-inspired design.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.rooms.map((room) => (
          <article key={room.title} className="rounded-xl border bg-white p-5">
            <h2 className="font-semibold">{room.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{room.description}</p>
          </article>
        ))}
      </div>
      <Image src={hotelImages.night} alt="Overwater accommodation at night" width={1920} height={1080} className="mt-10 rounded-xl" />
    </main>
  );
}
