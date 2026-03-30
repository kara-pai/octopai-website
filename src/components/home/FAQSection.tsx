'use client';

import { useState } from 'react';
import { FAQ_ITEMS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="container-main max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[var(--bg-hover)] transition-colors"
                >
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[var(--text-muted)] transition-transform shrink-0 ml-3 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
