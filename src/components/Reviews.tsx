import { useTranslations } from 'next-intl';
import { RATING_SNAPSHOT, ATTRACTION } from '@/data/site';

// We publish a Google Maps rating snapshot with its check date and link out for the
// live figures. No third-party reviews are copied or rewritten here.
export default function Reviews() {
  const t = useTranslations('reviews');

  return (
    <section id="reviews" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="p-6 sm:p-8 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {RATING_SNAPSHOT.value}
            </span>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>/ {RATING_SNAPSHOT.maxValue}</span>
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill={j < Math.round(RATING_SNAPSHOT.value) ? '#f0b429' : 'none'} stroke={j < Math.round(RATING_SNAPSHOT.value) ? '#f0b429' : 'var(--border-color)'} strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
          </div>

          <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>{t('intro')}</p>
          <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>{t('policy')}</p>

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
            {t('moreReviews')}
          </a>
        </div>
      </div>
    </section>
  );
}
