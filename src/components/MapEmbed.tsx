import { useTranslations } from 'next-intl';

export default function MapEmbed() {
  const t = useTranslations('mapSection');

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9104.82363201352!2d14.405755893579105!3d50.09598640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94db7467266d%3A0x945bf38ff60c58da!2sLetna%20Park!5e1!3m2!1szh-CN!2s!4v1787895519956!5m2!1szh-CN!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Letenská pláň (Letná Park) Location Map"
          />
        </div>

        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/RRYWDwtaiSGMkYQG9"
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