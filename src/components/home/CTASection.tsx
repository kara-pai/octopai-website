import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="container-main text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-3 font-semibold">
            Ready to Launch
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Agent is Waiting for{' '}
            <span className="gradient-text">Instructions</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
            2,400+ operators are already turning AI agents into revenue
            machines. Free access during launch — then $79 one-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/signup" className="btn-primary">
              <span className="line-through opacity-50">$179</span> Free <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>

          <p className="text-xs text-[var(--text-muted)] mt-5">
            Free during launch &nbsp;·&nbsp; Then $79 one-time
            &nbsp;·&nbsp; 60-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
