import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const officialLinkUrls: Record<string, { cs: string; zh: string; en: string }> = {
  pragueCity: {
    cs: 'https://www.praha.eu/cs',
    zh: 'https://www.praha.eu/en',
    en: 'https://www.praha.eu/en',
  },
  pragueTourism: {
    cs: 'https://www.prague.eu/cs',
    zh: 'https://www.prague.eu/en',
    en: 'https://www.prague.eu/en',
  },
  czechRepublic: {
    cs: 'https://www.vlada.cz/cs/',
    zh: 'https://www.vlada.cz/en/',
    en: 'https://www.vlada.cz/en/',
  },
  czechEnvironment: {
    cs: 'https://www.cenia.cz/cs/',
    zh: 'https://www.cenia.cz/en/',
    en: 'https://www.cenia.cz/en/',
  },
  czechTourism: {
    cs: 'https://www.visitczechia.com/cs-cz',
    zh: 'https://www.visitczechia.com/en-uk',
    en: 'https://www.visitczechia.com/en-uk',
  },
};

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const linkLabels = t.raw('officialLinks') as Record<string, string>;

  const getHref = (key: string): string => {
    const entry = officialLinkUrls[key];
    if (!entry) return '#';
    return entry[locale as keyof typeof entry] || entry.en;
  };

  const legalPath = (slug: string) => `/${locale}/${slug}`;

  return (
    <footer className="py-12 px-4" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Letenská pláň
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
              {t('disclaimer')}
            </p>
            <div>
              <h4 className="font-medium text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                {t('officialResourcesTitle')}
              </h4>
              <div className="flex flex-wrap gap-4">
                {Object.entries(linkLabels).map(([key, value]) => (
                  <a
                    key={key}
                    href={getHref(key)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    {value}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3" style={{ color: 'var(--text-primary)' }}>Navigation</h4>
            <div className="space-y-2">
              <a href="#gallery-section" className="block text-sm" style={{ color: 'var(--text-secondary)' }}>Gallery</a>
              <a href="#reviews" className="block text-sm" style={{ color: 'var(--text-secondary)' }}>Reviews</a>
              <a href="#map" className="block text-sm" style={{ color: 'var(--text-secondary)' }}>Map</a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3" style={{ color: 'var(--text-primary)' }}>Legal</h4>
            <div className="space-y-2">
              <a href={legalPath('privacy-policy')} className="block text-sm" style={{ color: 'var(--text-secondary)' }}>{t('privacy')}</a>
              <a href={legalPath('terms-of-service')} className="block text-sm" style={{ color: 'var(--text-secondary)' }}>{t('terms')}</a>
              <a href={legalPath('cookie-settings')} className="block text-sm" style={{ color: 'var(--text-secondary)' }}>{t('cookies')}</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-sm text-center" style={{ color: 'var(--text-muted)' }}>
            {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}