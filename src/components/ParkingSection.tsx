import { useTranslations, useMessages } from 'next-intl';
import { OFFICIAL_LINKS } from '@/data/site';

export default function ParkingSection() {
  const t = useTranslations('parking');
  const messages = useMessages() as any;
  const items: string[] = messages?.parking?.items || [];

  return (
    <section id="parking" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          id="parking-near-letna-park"
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>{t('intro')}</p>

        <ul className="space-y-3 mb-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>
          {t('note')}
        </p>
      </div>
    </section>
  );
}
