import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="container-main text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-purple)] mb-3">
            // ready_to_launch
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Agent is Waiting for{' '}
            <span className="gradient-text">Instructions</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
            2,400+ operators are already turning AI agents into revenue
            machines. Free access until April 30 — then $79 one-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Start Free — $0 until April 30 <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[var(--border-hover)] text-[var(--text-secondary)] rounded-xl hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-all text-sm"
            >
              View Pricing
            </Link>
          </div>

          <p className="text-xs text-[var(--text-muted)] mt-5">
            Free until April 30 &nbsp;·&nbsp; Then $79 one-time
            &nbsp;·&nbsp; 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
