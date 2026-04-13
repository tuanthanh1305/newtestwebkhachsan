import Image from 'next/image';
import {AutoLanguageRedirect} from '@/components/AutoLanguageRedirect';
import {LanguageSwitcher} from '@/components/LanguageSwitcher';
import {getMessages, type Locale} from '@/lib/i18n';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getMessages(locale);
  const base = `/${locale}`;
  return {
    title: t.seo.title,
    description: t.seo.description,
    alternates: {
      canonical: base,
      languages: {vi: '/vi', en: '/en'}
    }
  };
}

export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getMessages(locale);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Hotel',
        name: 'InterContinental Hanoi Westlake',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'No. 5 Tu Hoa Street, Tay Ho Ward',
          addressLocality: 'Hanoi',
          addressCountry: 'VN'
        },
        telephone: '+84 24 6270 8888',
        url: 'https://hanoi.intercontinental.com/vn'
      },
      {
        '@type': 'FAQPage',
        mainEntity: t.faq.map((item: {q: string; a: string}) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {'@type': 'Answer', text: item.a}
        }))
      }
    ]
  };

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16">
      <AutoLanguageRedirect locale={locale} />
      <header className="flex items-center justify-between py-6">
        <p className="font-semibold">InterContinental Hanoi Westlake</p>
        <LanguageSwitcher locale={locale} />
      </header>

      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight">{t.hero.title}</h1>
          <p className="mt-4 text-lg text-slate-700">{t.hero.description}</p>
          <a href="#booking" className="mt-6 inline-block rounded bg-slate-900 px-5 py-3 text-white">
            {t.hero.cta}
          </a>
        </div>
        <Image src="https://hanoi.intercontinental.com/wp-content/uploads/2024/03/hero-westlake.jpg" alt="InterContinental Hanoi Westlake overwater resort" width={1200} height={800} className="rounded-xl object-cover" />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{t.sections.roomsTitle}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {t.rooms.map((room: {name: string; desc: string}) => (
            <article key={room.name} className="rounded-lg border p-4">
              <h3 className="font-semibold">{room.name}</h3>
              <p className="mt-2 text-sm text-slate-700">{room.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{t.sections.diningTitle}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {t.dining.map((d: {name: string; desc: string}) => (
            <li key={d.name} className="rounded-lg bg-slate-50 p-4">
              <h3 className="font-semibold">{d.name}</h3>
              <p className="text-sm text-slate-700">{d.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" id="booking">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-4 space-y-4">
          {t.faq.map((item: {q: string; a: string}) => (
            <details key={item.q} className="rounded-lg border p-4">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-bold">{t.cta.title}</h2>
        <p className="mt-2 text-slate-200">{t.cta.body}</p>
        <a className="mt-5 inline-block rounded bg-white px-4 py-2 text-slate-900" href="tel:+842462708888">
          {t.cta.button}
        </a>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
    </main>
  );
}
