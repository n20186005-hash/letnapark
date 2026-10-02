import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/data/site';

// Legal pages use `noindex` in their own metadata, so they must stay crawlable here:
// disallowing them would stop crawlers from ever reading the noindex directive.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
