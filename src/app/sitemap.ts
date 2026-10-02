import type { MetadataRoute } from 'next';
import { HREFLANG, LOCALES, localizedPath } from '@/data/site';

// Only the apex domain may appear here, and only the three language homepages:
// legal pages are set to noindex and are intentionally excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: localizedPath(locale),
    lastModified: new Date('2026-10-02'),
    changeFrequency: 'weekly' as const,
    priority: locale === 'en' ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((l) => [HREFLANG[l], localizedPath(l)])),
    },
  }));
}
