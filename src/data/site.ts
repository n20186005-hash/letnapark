// Single source of truth for every verifiable fact about the attraction and the site.
// Content/copy lives in src/messages/*.json; only language-neutral facts live here.

export const SITE_URL = 'https://letnapark.com';

export const SITE_NAMES: Record<string, string> = {
  cs: 'Průvodce Letnou',
  zh: '莱特纳公园旅游指南',
  en: 'Letná Park Guide',
};

export const ATTRACTION = {
  // Main entity: Letná Park, in Czech "Letenské sady".
  name: 'Letná Park',
  nameLocal: 'Letenské sady',
  alternateNames: ['Letenské sady', 'Letná Park', 'Letenská pláň', 'Letna Park', 'Letná Park Prague'],
  // Neighbouring open ground that is often searched as a separate entity.
  adjacentArea: 'Letenská pláň',
  slugName: 'letnapark',
  type: 'Park',
  streetAddress: 'Letná, 170 00 Prague 7',
  addressLocality: 'Prague',
  addressRegion: 'Prague 7',
  postalCode: '170 00',
  addressCountry: 'CZ',
  country: 'Czechia',
  latitude: 50.0959864,
  longitude: 14.4057559,
  plusCode: '3CW8+94 Prague 7, Czechia',
  mapsShareUrl: 'https://maps.app.goo.gl/ZbALGJAhPn7YohZaA',
  heroImage: '/gallery/images%20(1).jpg',
  openingHours: 'Open 24 hours, year-round',
  isAccessibleForFree: true,
} as const;

// Google Maps snapshot — always show the sync date and point to Google for live counts.
export const RATING_SNAPSHOT = {
  value: 4.7,
  reviewCount: 29657,
  maxValue: 5,
  source: 'Google Maps',
  syncedAt: '2026-10',
} as const;

export const OFFICIAL_LINKS = {
  pragueCityTourism: 'https://www.prague.eu/en',
  pragueCityTourismCs: 'https://www.prague.eu/cs',
  czechTourism: 'https://www.visitczechia.com/en-uk',
  czechTourismCs: 'https://www.visitczechia.com/cs-cz',
  prague7: 'https://www.praha7.cz/',
} as const;

export const MAP_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9104.82363201352!2d14.405755893579105!3d50.09598640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94db7467266d%3A0x945bf38ff60c58da!2sLetna%20Park!5e1!3m2!1s2112!2s!4v1787895519956!5m2!1s2112!2s';

export const LOCALES = ['cs', 'zh', 'en'] as const;
export type AppLocale = (typeof LOCALES)[number];

export const HREFLANG: Record<AppLocale, string> = {
  cs: 'cs-CZ',
  zh: 'zh-Hans',
  en: 'en',
};

export const HTML_LANG: Record<AppLocale, string> = {
  cs: 'cs-CZ',
  zh: 'zh-Hans',
  en: 'en',
};

export const OG_LOCALE: Record<AppLocale, string> = {
  cs: 'cs_CZ',
  zh: 'zh_CN',
  en: 'en_US',
};

export function localizedPath(locale: string, suffix = ''): string {
  return `${SITE_URL}/${locale}${suffix}`;
}

export function mapsEmbedSrc(locale: string): string {
  const hl = locale === 'cs' ? 'cs' : locale === 'zh' ? 'zh-CN' : 'en';
  return MAP_EMBED_SRC.replace(/!1s2112!2s/g, `!1s${hl}!2s`);
}
