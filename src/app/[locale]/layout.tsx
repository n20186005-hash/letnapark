import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const DOMAIN_NAME = 'letnapark.com';
const ATTRACTION_FULL_NAME = 'Letenská pláň (Letná Park)';
const ATTRACTION_SHORT_NAME = 'Letna Park';
const CITY_NAME = 'Prague';
const STATE_PROVINCE = 'Prague';
const COUNTRY_NAME = 'Czech Republic';
const COUNTRY_CODE_2LETTER = 'CZ';
const POSTAL_CODE = '170 00';
const LATITUDE = 50.09598640000001;
const LONGITUDE = 14.405755893579105;
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/RRYWDwtaiSGMkYQG9';
const MAPS_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9104.82363201352!2d14.405755893579105!3d50.09598640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94db7467266d%3A0x945bf38ff60c58da!2sLetna%20Park!5e1!3m2!1szh-CN!2s!4v1787895519956!5m2!1szh-CN!2s';
const GOVT_TOURISM_URL = 'https://www.visitczechia.com/en-uk';
const HERO_IMAGE = 'https://letnapark.com/gallery/images%20(1).jpg';

const titleByLocale: Record<string, string> = {
  cs: 'Letenská pláň (Praha) – Průvodce návštěvníka & poloha',
  zh: 'Letenská pláň 莱特纳公园 (布拉格) - 游客指南与位置地图',
  en: 'Letenská pláň (Prague) - Visitor Guide & Location',
};

const descriptionByLocale: Record<string, string> = {
  cs: 'Objevte Letenskou pláň, ikonickou památku v Praze, České republiky. Prohlédněte si polohu na mapě, otevírací dobu, okolní památky jako Pražský hrad a Karlův most a tipy na cestování.',
  zh: '探索布拉格的标志性地标 Letenská pláň（莱特纳公园）。查看位置地图、开放时间、周边布拉格城堡和查理大桥等景点，以及旅游贴士。',
  en: 'Discover Letenská pláň (Letná Park), the iconic landmark in Prague, Czech Republic. View location map, opening details, nearby Prague Castle and Charles Bridge, and travel tips.',
};

const ogTitleByLocale: Record<string, string> = {
  cs: 'Letenská pláň – Pražský průvodce turistem',
  zh: 'Letenská pláň 莱特纳公园 - 布拉格旅游指南',
  en: 'Letenská pláň - Prague Travel Guide',
};

const ogDescriptionByLocale: Record<string, string> = {
  cs: 'Oficiální průvodce návštěvníka pro Letenskou pláň v Praze, České republiky.',
  zh: '位于捷克共和国布拉格的 Letenská pláň（莱特纳公园）官方游客指南。',
  en: 'Official visitor guide to Letenská pláň in Prague, Czech Republic.',
};

const ogImageAltByLocale: Record<string, string> = {
  cs: 'Letenská pláň v Praze',
  zh: '布拉格 Letenská pláň 莱特纳公园主景观',
  en: 'Letenská pláň main view in Prague, Czech Republic',
};

const localeMap: Record<string, string> = {
  cs: 'cs_CZ',
  zh: 'zh_CN',
  en: 'en_US',
};

const htmlLangMap: Record<string, string> = {
  cs: 'cs-CZ',
  zh: 'zh-CN',
  en: 'en',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = `https://${DOMAIN_NAME}`;

  const csUrl = `${baseUrl}/cs`;
  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const selfUrl =
    locale === 'cs' ? csUrl :
    locale === 'zh' ? zhUrl : enUrl;

  const touristAttractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${baseUrl}/#attraction`,
    name: ATTRACTION_FULL_NAME,
    alternateName: [ATTRACTION_SHORT_NAME, `${CITY_NAME} ${ATTRACTION_FULL_NAME}`],
    description: descriptionByLocale[locale] || descriptionByLocale.en,
    url: selfUrl,
    image: [HERO_IMAGE],
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ATTRACTION_FULL_NAME,
      addressLocality: CITY_NAME,
      addressRegion: STATE_PROVINCE,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE_2LETTER,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    hasMap: MAPS_SHARE_URL,
    sameAs: [MAPS_SHARE_URL, GOVT_TOURISM_URL],
  };

  const faqByLocale: Record<string, Array<{ name: string; text: string }>> = {
    cs: [
      {
        name: 'Kde se nachází Letenská pláň?',
        text: 'Letenská pláň se nachází v Praze, Hlavní město Praha, Česká republika.',
      },
      {
        name: 'Je vstup na Letenskou pláň zdarma?',
        text: 'Ano, Letenská pláň je veřejný prostor a je zdarma k návštěvě po celý rok.',
      },
    ],
    zh: [
      {
        name: 'Letenská pláň（莱特纳公园）位于哪里？',
        text: 'Letenská pláň（莱特纳公园）位于捷克共和国布拉格市布拉格区。',
      },
      {
        name: '参观 Letna Park 需要门票吗？',
        text: '是的，Letenská pláň（莱特纳公园）是公共空间，全年免费开放参观。',
      },
    ],
    en: [
      {
        name: 'Where is Letenská pláň located?',
        text: 'Letenská pláň is located in Prague, Prague, Czech Republic.',
      },
      {
        name: 'Is Letna Park free to visit?',
        text: 'Yes, Letenská pláň is a public space and is free to visit year-round.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faqByLocale[locale] || faqByLocale.en).map((faq) => ({
      '@type': 'Question',
      name: faq.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.text,
      },
    })),
  };

  return {
    title: titleByLocale[locale] || titleByLocale.en,
    description: descriptionByLocale[locale] || descriptionByLocale.en,
    alternates: {
      canonical: selfUrl,
      languages: {
        'cs': csUrl,
        'zh': zhUrl,
        'en': enUrl,
        'x-default': csUrl,
      },
    },
    openGraph: {
      title: ogTitleByLocale[locale] || ogTitleByLocale.en,
      description: ogDescriptionByLocale[locale] || ogDescriptionByLocale.en,
      url: selfUrl,
      siteName: `${ATTRACTION_SHORT_NAME} Guide`,
      locale: localeMap[locale] || 'en_US',
      type: 'website',
      images: [
        {
          url: HERO_IMAGE,
          alt: ogImageAltByLocale[locale] || ogImageAltByLocale.en,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitleByLocale[locale] || ogTitleByLocale.en,
      description: ogDescriptionByLocale[locale] || ogDescriptionByLocale.en,
      images: [HERO_IMAGE],
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

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const touristAttractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `https://${DOMAIN_NAME}/#attraction`,
    name: ATTRACTION_FULL_NAME,
    alternateName: [ATTRACTION_SHORT_NAME, `${CITY_NAME} ${ATTRACTION_FULL_NAME}`],
    description: descriptionByLocale[locale] || descriptionByLocale.en,
    url: `https://${DOMAIN_NAME}/${locale}`,
    image: [HERO_IMAGE],
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ATTRACTION_FULL_NAME,
      addressLocality: CITY_NAME,
      addressRegion: STATE_PROVINCE,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE_2LETTER,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    hasMap: MAPS_SHARE_URL,
    sameAs: [MAPS_SHARE_URL, GOVT_TOURISM_URL],
  };

  const faqByLocale: Record<string, Array<{ name: string; text: string }>> = {
    cs: [
      {
        name: 'Kde se nachází Letenská pláň?',
        text: 'Letenská pláň se nachází v Praze, Hlavní město Praha, Česká republika.',
      },
      {
        name: 'Je vstup na Letenskou pláň zdarma?',
        text: 'Ano, Letenská pláň je veřejný prostor a je zdarma k návštěvě po celý rok.',
      },
    ],
    zh: [
      {
        name: 'Letenská pláň（莱特纳公园）位于哪里？',
        text: 'Letenská pláň（莱特纳公园）位于捷克共和国布拉格市布拉格区。',
      },
      {
        name: '参观 Letna Park 需要门票吗？',
        text: '是的，Letenská pláň（莱特纳公园）是公共空间，全年免费开放参观。',
      },
    ],
    en: [
      {
        name: 'Where is Letenská pláň located?',
        text: 'Letenská pláň is located in Prague, Prague, Czech Republic.',
      },
      {
        name: 'Is Letna Park free to visit?',
        text: 'Yes, Letenská pláň is a public space and is free to visit year-round.',
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faqByLocale[locale] || faqByLocale.en).map((faq) => ({
      '@type': 'Question',
      name: faq.name,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.text,
      },
    })),
  };

  return (
    <html lang={htmlLangMap[locale] || 'en'} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`https://${DOMAIN_NAME}/${locale}`} />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:image:alt" content={ogImageAltByLocale[locale] || ogImageAltByLocale.en} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
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
