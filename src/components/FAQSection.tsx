'use client';

import { useState } from 'react';
import { faqs } from '@/lib/data';

function FAQItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <div className="glass-card overflow-hidden group">
      <button
        id={id}
        aria-controls={answerId}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left hover:bg-white/[0.04] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-inset"
      >
        <span className="font-heading font-bold text-white/85 text-base md:text-lg leading-snug pr-2">
          {q}
        </span>
        <span
          className={`shrink-0 mt-0.5 w-6 h-6 rounded-full border border-white/[0.15] flex items-center justify-center text-white/50 transition-all duration-300 ${
            open
              ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 rotate-45'
              : 'group-hover:border-white/30'
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={id}
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-white/[0.06]">
          <p className="text-white/55 text-sm md:text-base leading-relaxed pt-4">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-8"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/30 rounded-full px-5 py-2 text-purple-300 text-sm font-semibold mb-6">
            <span aria-hidden="true">❓</span>
            Frequently Asked Questions (answers vary)
          </div>
          <h2
            id="faq-heading"
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            You Have{' '}
            <span className="text-gradient-purple">Questions</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            We have answers. They might not be the ones you want. They are definitely the ones
            Claudia generated.
          </p>
        </div>

        {/* FAQ items */}
        <div
          className="flex flex-col gap-3"
          role="list"
          aria-label="Frequently asked questions"
        >
          {faqs.map((faq, i) => (
            <div key={i} role="listitem">
              <FAQItem q={faq.q} a={faq.a} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center glass-card p-6">
          <div className="text-2xl mb-3" aria-hidden="true">🤷</div>
          <h3 className="font-heading font-bold text-lg text-white/80 mb-2">
            Still have questions?
          </h3>
          <p className="text-white/40 text-sm mb-4">
            Open a support ticket. Claudia will generate a response. It will be confidently wrong.
          </p>
          <div className="inline-flex items-center gap-2 text-xs text-white/25">
            <span>📬</span>
            <span>Average response time: immediately · Accuracy: debatable</span>
          </div>
        </div>
      </div>
    </section>
  );
}
