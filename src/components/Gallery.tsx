'use client';

import { useTranslations, useLocale } from 'next-intl';

const landmarkByIndex: Record<number, { cs: string; zh: string; en: string }> = {
  0: { cs: 'Panoramatický výhled na Letenskou pláň', zh: '莱特纳公园全景 - Letenská pláň 主视角', en: 'Letenská pláň Panoramic View - Main Viewpoint' },
  1: { cs: 'Výhled na Pražský hrad poblíž Letenské planě', zh: '布拉格城堡 - 莱特纳公园附近地标', en: 'Prague Castle near Letna Park' },
  2: { cs: 'Letenské pivní zahrady poblíž Letenské planě', zh: '莱特纳啤酒花园 - Letenská pláň 地标', en: 'Letná Beer Garden near Letna Park' },
  3: { cs: 'Výhled na řeku Vltavu poblíž Letenské planě', zh: '伏尔塔瓦河 - 莱特纳公园附近景观', en: 'Vltava River View near Letna Park' },
  4: { cs: 'Socha obřího metronomu poblíž Letenské planě', zh: '巨型节拍器雕塑 - 莱特纳公园附近地标', en: 'Giant Metronome Sculpture near Letna Park' },
  5: { cs: 'Stíněná stezka v Letenské pláni', zh: '绿树小径 - 莱特纳公园内部景观', en: 'Tree-shaded Path in Letna Park' },
  6: { cs: 'Městská vyhlídka v Letenské pláni', zh: '城市观景台 - 莱特纳公园观景设施', en: 'City Viewpoint in Letna Park' },
  7: { cs: 'Západ slunce nad Letenskou plání', zh: '日落时分 - 莱特纳公园黄金时刻', en: 'Sunset Moment at Letna Park' },
  8: { cs: 'Rekreační trávník v Letenské pláni', zh: '草坪休闲区 - 莱特纳公园内部', en: 'Park Lawn Recreation in Letna Park' },
  9: { cs: 'Panorama Pražské panoramaty z Letenské planě', zh: '布拉格天际线 - 从莱特纳公园眺望', en: 'Prague Skyline from Letna Park' },
  10: { cs: 'Jarní rozkvetlé třešně v Letenské pláni', zh: '春季樱花 - 莱特纳公园季节性景观', en: 'Spring Cherry Blossoms in Letna Park' },
  11: { cs: 'Dětské hřiště v Letenské pláni', zh: '儿童游乐场 - 莱特纳公园设施', en: 'Children\'s Playground in Letna Park' },
};

export default function Gallery() {
  const t = useTranslations('gallery');
  const locale = useLocale();
  const captions = t.raw('captions') as string[];

  const getAlt = (i: number): string => {
    const entry = landmarkByIndex[i] || landmarkByIndex[0];
    return entry[locale as keyof typeof entry] || entry.en;
  };

  return (
    <section id="gallery-section" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>{t('subtitle')}</p>
          <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: 'var(--accent)' }} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {captions.map((caption, i) => (
            <div key={i} className="gallery-item aspect-square rounded-lg overflow-hidden relative group" style={{ background: 'var(--bg-tertiary)' }}>
              <img
                src={`/gallery/images (${i + 1}).jpg`}
                alt={getAlt(i)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm text-white font-medium">{caption}</span>
              </div>
            </div>
          ))}
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
            {t('viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}