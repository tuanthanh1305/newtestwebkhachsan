import Image from 'next/image';
<<<<<<< HEAD
import {AutoLanguageRedirect} from '@/components/AutoLanguageRedirect';
import {LanguageSwitcher} from '@/components/LanguageSwitcher';
import {getMessages, type Locale} from '@/lib/i18n';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getMessages(locale);
  const base = `/${locale}`;
=======
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {AutoLanguageRedirect} from '@/components/AutoLanguageRedirect';
import {isLocale, type Locale} from '@/lib/i18n';
import {getSiteContent, hotelImages} from '@/lib/site-content';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) return {};
  const t = getSiteContent(locale);
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
  return {
    title: t.seo.title,
    description: t.seo.description,
    alternates: {
<<<<<<< HEAD
      canonical: base,
=======
      canonical: `/${locale}`,
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
      languages: {vi: '/vi', en: '/en'}
    }
  };
}

<<<<<<< HEAD
export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getMessages(locale);
=======
export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  const t = getSiteContent(locale as Locale);
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Hotel',
        name: 'InterContinental Hanoi Westlake',
<<<<<<< HEAD
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
=======
        address: t.contact.address,
        telephone: t.contact.phone,
        email: t.contact.email,
        image: [hotelImages.hero, hotelImages.sunset, hotelImages.lobby],
        url: `https://hanoi.intercontinental.com/${locale}`
      },
      {
        '@type': 'FAQPage',
        mainEntity: t.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
        }))
      }
    ]
  };

  return (
<<<<<<< HEAD
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
=======
    <main>
      <AutoLanguageRedirect locale={locale} />
      <section className="relative">
        <Image src={hotelImages.hero} alt="InterContinental Hanoi Westlake overview" width={1920} height={1080} className="h-[70vh] w-full object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center px-4 text-white">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{t.hero.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-100">{t.hero.subtitle}</p>
          <Link href={`/${locale}/contact`} className="mt-8 w-fit rounded-md bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-300">
            {t.hero.cta}
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Highlights</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {t.highlights.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl border bg-white shadow-sm">
              {item.image && <Image src={item.image} alt={item.title} width={900} height={600} className="h-48 w-full object-cover" />}
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
            </article>
          ))}
        </div>
      </section>

<<<<<<< HEAD
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
=======
      <section className="mx-auto mt-14 max-w-6xl px-4">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-5 space-y-3">
          {t.faq.map((item) => (
            <details key={item.q} className="rounded-lg border p-4">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
            </details>
          ))}
        </div>
      </section>

<<<<<<< HEAD
      <section className="mt-14 rounded-xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-bold">{t.cta.title}</h2>
        <p className="mt-2 text-slate-200">{t.cta.body}</p>
        <a className="mt-5 inline-block rounded bg-white px-4 py-2 text-slate-900" href="tel:+842462708888">
          {t.cta.button}
        </a>
=======
      <section className="mx-auto mt-14 max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Guest Voices</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {t.testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-xl bg-slate-900 p-6 text-white">
              <p className="text-lg">“{item.quote}”</p>
              <footer className="mt-3 text-sm text-slate-300">— {item.name}</footer>
            </blockquote>
          ))}
        </div>
>>>>>>> origin/codex/crawl-and-rebuild-hotel-website-with-seo-ek3ekt
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
    </main>
  );
}
