import { ATTRACTION, OFFICIAL_LINKS, RATING_SNAPSHOT, SITE_URL, localizedPath } from '@/data/site';

// All three locales point at the same @id so Google treats them as one entity.
// No aggregateRating / Review is emitted: ratings shown on the page are a Google Maps
// snapshot and must not be republished as the site's own review data.
export function buildAttractionJsonLd(locale: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    '@id': `${SITE_URL}#attraction`,
    name: locale === 'cs' ? ATTRACTION.nameLocal : ATTRACTION.name,
    alternateName: locale === 'cs'
      ? ['Letná Park', ATTRACTION.adjacentArea, 'Letná Park Prague']
      : [ATTRACTION.nameLocal, ATTRACTION.adjacentArea, 'Letná Park Prague'],
    description,
    url: localizedPath(locale),
    image: [`${SITE_URL}${ATTRACTION.heroImage}`],
    isAccessibleForFree: ATTRACTION.isAccessibleForFree,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ATTRACTION.streetAddress,
      addressLocality: ATTRACTION.addressLocality,
      addressRegion: ATTRACTION.addressRegion,
      postalCode: ATTRACTION.postalCode,
      addressCountry: ATTRACTION.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ATTRACTION.latitude,
      longitude: ATTRACTION.longitude,
    },
    hasMap: ATTRACTION.mapsShareUrl,
    sameAs: [
      ATTRACTION.mapsShareUrl,
      OFFICIAL_LINKS.pragueCityTourism,
      OFFICIAL_LINKS.czechTourism,
    ],
  };
}

export function buildFaqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function ratingLabelParts(countFormatted: string, syncedAt: string) {
  return {
    value: RATING_SNAPSHOT.value,
    maxValue: RATING_SNAPSHOT.maxValue,
    countFormatted,
    source: RATING_SNAPSHOT.source,
    syncedAt,
  };
}
