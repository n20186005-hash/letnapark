import { useTranslations } from 'next-intl';
import { OFFICIAL_LINKS } from '@/data/site';

export default function EventsSection() {
  const t = useTranslations('events');

  return (
    <section id="events" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          id="events-letenska-plan"
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          {t('body')}
        </p>

        <a
          href={OFFICIAL_LINKS.pragueCityTourism}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium underline"
          style={{ color: 'var(--accent)' }}
        >
          {t('linkText')}
        </a>
      </div>
    </section>
  );
}
