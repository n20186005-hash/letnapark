import { useTranslations, useMessages } from 'next-intl';

type Viewpoint = {
  name: string;
  coords: string;
  walk: string;
  view: string;
  bestTime: string;
};

export default function ViewpointsSection() {
  const t = useTranslations('viewpoints');
  const messages = useMessages() as any;
  const items: Viewpoint[] = messages?.viewpoints?.items || [];

  return (
    <section id="viewpoints" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          id="best-viewpoints-letna-park"
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>{t('intro')}</p>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {i + 1}. {item.name}
              </h3>
              <dl className="grid gap-2 sm:grid-cols-[140px_1fr]">
                <dt className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{t('coordsLabel')}</dt>
                <dd className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.coords}</dd>
                <dt className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{t('walkLabel')}</dt>
                <dd className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.walk}</dd>
                <dt className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{t('viewLabel')}</dt>
                <dd className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.view}</dd>
                <dt className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{t('timeLabel')}</dt>
                <dd className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.bestTime}</dd>
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
          {t('note')}
        </p>
      </div>
    </section>
  );
}
