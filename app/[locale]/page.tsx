import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {AutoLanguageRedirect} from '@/components/AutoLanguageRedirect';
import {isLocale, type Locale} from '@/lib/i18n';
import {getSiteContent, hotelImages} from '@/lib/site-content';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) return {};
  const t = getSiteContent(locale);
  return {
    title: t.seo.title,
    description: t.seo.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {vi: '/vi', en: '/en'}
    }
  };
}

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  const t = getSiteContent(locale as Locale);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Hotel',
        name: 'InterContinental Hanoi Westlake',
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
        }))
      }
    ]
  };

  return (
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
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-5 space-y-3">
          {t.faq.map((item) => (
            <details key={item.q} className="rounded-lg border p-4">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

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
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
    </main>
  );
}
