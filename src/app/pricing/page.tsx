'use client';

import { PRICING_PLANS } from '@/lib/constants';
import { Check, Zap } from 'lucide-react';

export default function PricingPage() {
  const handleCheckout = (planId: string) => {
    console.log(`Checkout: ${planId}`);
    alert(`Stripe checkout for "${planId}" plan will be connected here.`);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
            Pricing
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Free during launch. Then one payment, lifetime access. 60-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`card p-6 flex flex-col relative ${
                plan.highlighted ? 'border-[var(--accent)] border-2 shadow-lg' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="tag flex items-center gap-1 text-[10px]">
                    <Zap size={10} /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{plan.name}</h3>
                <p className="text-xs text-[var(--text-muted)]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-[var(--text-primary)]">
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}
                </span>
                {plan.price > 0 && (
                  <span className="text-xs text-[var(--text-muted)] ml-1">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <Check size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.id)}
                className={plan.highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}
              >
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[var(--text-muted)]">
            <span>Secure checkout via Stripe</span>
            <span>60-day money-back guarantee</span>
            <span>Lifetime access</span>
          </div>
        </div>
      </div>
    </div>
  );
}
