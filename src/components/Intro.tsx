import { useTranslations, useMessages } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const tOff = useTranslations('officialManagement');
  const tRec = useTranslations('recommendations');
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];
  const attractions: Array<{name: string; url: string}> = messages?.recommendations?.attractions || [];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          id="about-letna-park"
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('aboutTitle')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div
          className="mb-8 p-4 sm:p-6 rounded-lg border border-dashed"
          style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}
        >
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center text-sm" style={{ color: 'var(--text-muted)' }}>
              {messages?.intro?.breadcrumb?.map((crumb: string, i: number, arr: string[]) => (
                <li key={i} className="flex items-center">
                  {i > 0 && (
                    <span className="mx-2" aria-hidden="true">→</span>
                  )}
                  <span className={i === arr.length - 1 ? 'font-medium' : ''} style={{ color: i === arr.length - 1 ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    {crumb}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
          <p
            className="text-base leading-relaxed font-medium"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('equivalenceStatement')}
          </p>
        </div>

        <p
          className="text-lg leading-relaxed mb-12 whitespace-pre-line"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12 p-6 sm:p-8 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
          <h2 id="landmarks-around-letna-park" className="font-display text-2xl sm:text-3xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t('nearbyLandmarksTitle')}
          </h2>
          <p className="mb-6 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t('nearbyLandmarksDescription')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {attractions.slice(0, 4).map((att, i) => (
              <a
                key={i}
                href={att.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border transition-colors hover:border-[var(--accent)]"
                style={{ borderColor: 'var(--border-color)', background: 'var(--bg-primary)' }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--accent)', color: '#fff' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{att.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-[var(--accent)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h2>
          <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
            {tOff('text')}
          </div>
        </div>

        <div className="mt-8 text-sm p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
          <p>{tRec('govtTourismNote')}
            <a
              href="https://www.visitczechia.com/en-uk"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline font-medium"
              style={{ color: 'var(--accent)' }}
            >
              {tRec('govtTourismLink')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
