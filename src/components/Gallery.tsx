'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ATTRACTION } from '@/data/site';

const landmarkByIndex: Record<number, { cs: string; zh: string; en: string }> = {
  0: { cs: 'Panoramatický výhled z terasy v Letenských sadech', zh: '莱特纳公园阳台全景视角', en: 'Panoramic view from the terrace in Letná Park' },
  1: { cs: 'Výhled na Pražský hrad z Letenských sadů', zh: '从莱特纳公园眺望布拉格城堡', en: 'Prague Castle seen from Letná Park' },
  2: { cs: 'Letenská pivní zahrada s výhledem na město', zh: '莱特纳啤酒花园的城市景色', en: 'Letná Beer Garden with the city view' },
  3: { cs: 'Výhled na řeku Vltavu z Letné', zh: '从莱特纳眺望伏尔塔瓦河', en: 'Vltava River view from Letná' },
  4: { cs: 'Socha Metronomu na Letné', zh: '莱特纳公园的节拍器雕塑', en: 'Metronome sculpture at Letná' },
  5: { cs: 'Stíněná alej v Letenských sadech', zh: '莱特纳公园的林荫步道', en: 'Tree-shaded alley in Letenské sady' },
  6: { cs: 'Městská vyhlídková terasa na Letné', zh: '莱特纳公园的城市观景平台', en: 'City viewpoint terrace at Letná' },
  7: { cs: 'Západ slunce nad Prahou z Letné', zh: '从莱特纳公园看布拉格日落', en: 'Sunset over Prague from Letná' },
  8: { cs: 'Odpočinek na trávníku v parku', zh: '莱特纳公园的草坪休闲区', en: 'Lawn relaxation in Letná Park' },
  9: { cs: 'Panorama Prahy z Letenské plošiny', zh: '从莱特纳高地眺望布拉格天际线', en: 'Prague skyline from the Letná plateau' },
  10: { cs: 'Jarní květy v Letenských sadech', zh: '莱特纳公园的春季花开', en: 'Spring blossom in Letenské sady' },
  11: { cs: 'Dětské hřiště v Letné poblíž Letenského náměstí', zh: '莱特纳公园的儿童游乐区', en: 'Children’s playground in Letná near Letenské náměstí' },
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
            {t('viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}