import {notFound} from 'next/navigation';
import {isLocale} from '@/lib/i18n';
import {getSiteContent} from '@/lib/site-content';

export default async function DiningPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  const t = getSiteContent(locale);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-bold">{t.nav.dining}</h1>
      <p className="mt-3 text-slate-600">Explore signature dining venues inspired by Vietnamese, Italian, and international culinary traditions.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {t.dining.map((item) => (
          <article key={item.title} className="rounded-xl border bg-white p-5">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
