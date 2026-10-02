import { useTranslations, useMessages } from 'next-intl';

type StayArea = { name: string; desc: string };

// Independent guide: we describe areas and their trade-offs rather than naming
// individual hotels we cannot verify.
export default function StaySection() {
  const t = useTranslations('stay');
  const messages = useMessages() as any;
  const areas: StayArea[] = messages?.stay?.areas || [];

  return (
    <section id="stay" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>{t('intro')}</p>

        <div className="space-y-4">
          {areas.map((area, i) => (
            <div key={i} className="p-5 rounded-xl" style={{ background: 'var(--bg-tertiary)' }}>
              <h3 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{area.name}</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{area.desc}</p>
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
