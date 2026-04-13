import {notFound} from 'next/navigation';
import {isLocale} from '@/lib/i18n';
import {getSiteContent} from '@/lib/site-content';

export default async function ContactPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  const t = getSiteContent(locale);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-bold">{t.nav.contact}</h1>
      <div className="mt-8 grid gap-6 rounded-xl border p-6 md:grid-cols-2">
        <div>
          <h2 className="font-semibold">Address</h2>
          <p className="mt-2 text-slate-600">{t.contact.address}</p>
          <h2 className="mt-6 font-semibold">Phone</h2>
          <a className="mt-2 block text-slate-700" href={`tel:${t.contact.phone.replace(/\s+/g, '')}`}>{t.contact.phone}</a>
          <h2 className="mt-6 font-semibold">Email</h2>
          <a className="mt-2 block text-slate-700" href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
        </div>
        <form className="space-y-3" aria-label="Contact form">
          <input className="w-full rounded border px-3 py-2" placeholder="Your name" aria-label="Name" />
          <input className="w-full rounded border px-3 py-2" placeholder="Email" aria-label="Email" />
          <textarea className="h-32 w-full rounded border px-3 py-2" placeholder="Message" aria-label="Message" />
          <button className="rounded bg-slate-900 px-4 py-2 text-white" type="button">Send inquiry</button>
        </form>
      </div>
    </main>
  );
}
