'use client';

import { PRICING_PLANS } from '@/lib/constants';
import { Check, Zap } from 'lucide-react';

export default function PricingPage() {
  const handleCheckout = (planId: string) => {
    // Stripe integration placeholder
    console.log(`Checkout: ${planId}`);
    alert(
      `Stripe checkout for "${planId}" plan will be connected here. Integration ready.`,
    );
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-cyan)] mb-2">
            // pricing
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            One payment. Lifetime access. No subscriptions. No hidden fees.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`glow-card p-6 flex flex-col relative ${
                plan.highlighted
                  ? 'border-[var(--accent-cyan)] border-2 shadow-[0_0_40px_rgba(0,229,255,0.15)]'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="tag tag-green flex items-center gap-1 text-[10px]">
                    <Zap size={10} /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-[var(--text-primary)]">
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}
                </span>
                {plan.price > 0 && (
                  <span className="text-xs text-[var(--text-muted)] ml-1">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <Check
                      size={14}
                      className="text-[var(--accent-cyan)] shrink-0 mt-0.5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.id)}
                className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)] hover:opacity-90'
                    : 'border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]'
                }`}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="text-center mt-10">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[var(--text-muted)]">
            <span>🔒 Secure checkout via Stripe</span>
            <span>💸 30-day money-back guarantee</span>
            <span>♾️ Lifetime access</span>
            <span>📧 Priority support</span>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-xl mx-auto mt-16">
          <h3 className="text-sm font-semibold text-center text-[var(--text-primary)] mb-6">
            Pricing FAQ
          </h3>
          <div className="space-y-4">
            {[
              {
                q: 'Is it really one-time payment?',
                a: 'Yes. Pay once, get lifetime access to everything. No recurring charges.',
              },
              {
                q: 'Can I upgrade later?',
                a: 'Absolutely. Start free and upgrade to Pro or Team anytime. You only pay the difference.',
              },
              {
                q: 'Do you offer refunds?',
                a: '30-day money-back guarantee. If it is not for you, email us and we will refund in full.',
              },
            ].map((item) => (
              <div key={item.q} className="glow-card p-4">
                <p className="text-sm font-medium text-[var(--text-primary)] mb-1">
                  {item.q}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
