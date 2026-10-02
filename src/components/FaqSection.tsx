import { useTranslations, useMessages } from 'next-intl';

type FaqItem = { question: string; answer: string };

// Visible FAQ: the same items are emitted as FAQPage structured data in the layout,
// so every answer marked up here is also readable on the page.
export default function FaqSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const items: FaqItem[] = messages?.faq?.items || [];

  if (items.length === 0) return null;

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          id="frequently-asked-questions"
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="space-y-3">
          {items.map((item, i) => (
            <details
              key={i}
              className="p-5 rounded-xl border"
              style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}
            >
              <summary
                className="cursor-pointer font-medium list-none"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
