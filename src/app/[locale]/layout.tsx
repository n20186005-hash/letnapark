import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import {
  ATTRACTION,
  HREFLANG,
  HTML_LANG,
  LOCALES,
  OG_LOCALE,
  SITE_URL,
  localizedPath,
} from '@/data/site';
import { buildAttractionJsonLd, buildFaqJsonLd } from '@/lib/schema';

type LocaleParam = { params: Promise<{ locale: string }> };

function isSupported(locale: string): boolean {
  return (LOCALES as readonly string[]).includes(locale);
}

function hreflangLanguages(suffix = ''): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = localizedPath(l, suffix);
  }
  languages['x-default'] = localizedPath('en', suffix);
  return languages;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleParam): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const selfUrl = localizedPath(locale);
  const image = `${SITE_URL}${ATTRACTION.heroImage}`;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: selfUrl,
      languages: hreflangLanguages(),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: selfUrl,
      siteName: t('siteName'),
      locale: OG_LOCALE[locale as keyof typeof OG_LOCALE] || 'en_US',
      type: 'website',
      images: [{ url: image, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [image],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupported(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'meta' });

  const faqItems = ((messages as any)?.faq?.items || []) as Array<{ question: string; answer: string }>;

  const attractionJsonLd = buildAttractionJsonLd(locale, t('description'));
  const faqJsonLd = buildFaqJsonLd(faqItems);

  return (
    <html lang={HTML_LANG[locale as keyof typeof HTML_LANG] || 'en'} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionJsonLd) }}
        />
        {faqItems.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
