import { useTranslations, useLocale } from 'next-intl';
import { ATTRACTION, mapsEmbedSrc } from '@/data/site';

export default function MapEmbed() {
  const t = useTranslations('mapSection');
  const locale = useLocale();

  return (
    <section id="map" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          id="location-how-to-visit-letna-park"
          className="font-display text-3xl sm:text-4xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('locationTitle')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>{t('subtitle')}</p>

        <div className="map-container rounded-xl overflow-hidden" style={{ border: '1px solid var(--map-border)' }}>
          <iframe
            src={mapsEmbedSrc(locale)}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title={`${ATTRACTION.name} (${ATTRACTION.nameLocal}) location map`}
          />
        </div>

        <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
          {ATTRACTION.streetAddress} · {ATTRACTION.plusCode} · {ATTRACTION.latitude}, {ATTRACTION.longitude}
        </p>

        <div className="text-center mt-8">
          <a
            href={ATTRACTION.mapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {t('openMaps')}
          </a>
        </div>
      </div>
    </section>
  );
}
