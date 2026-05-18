'use client';

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

export default function HoursSection() {
  const t = useTranslations('hours');

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <TimeCard title={t('outdoor')} time={t('outdoorTime')} iconKey="outdoor" />
          <TimeCard title={t('beerGarden')} time={t('beerGardenTime')} iconKey="beerGarden" />
        </div>

        <div
          className="mt-6 rounded-xl p-5 flex items-start gap-4"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('tip')}</p>
        </div>
      </div>
    </section>
  );
}

function TimeCard({ title, time, timeValue, iconKey }: { title: string; time?: string; timeValue?: string; iconKey: string }) {
  const icons: Record<string, ReactNode> = {
    outdoor: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    beerGarden: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 2h8"/>
        <path d="M7 2v4h10V2"/>
        <path d="M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6"/>
        <path d="M12 12v4"/>
        <path d="M10 14h4"/>
      </svg>
    ),
  };

  return (
    <div
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div className="flex items-center gap-3 mb-3" style={{ color: 'var(--accent)' }}>
        {icons[iconKey]}
        <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      </div>
      <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{time || timeValue}</p>
    </div>
  );
}
