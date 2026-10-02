import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';
import { LOCALES, HREFLANG, localizedPath } from '@/data/site';

const PAGE_SUFFIX = '/cookie-settings';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const selfUrl = localizedPath(locale, PAGE_SUFFIX);

  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = localizedPath(l, PAGE_SUFFIX);
  }
  languages['x-default'] = localizedPath('en', PAGE_SUFFIX);

  return {
    alternates: {
      canonical: selfUrl,
      languages,
    },
    robots: { index: false, follow: true },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
