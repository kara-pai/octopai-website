import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-[var(--bg-secondary)]">
      <div className="container-main text-center">
        <div className="max-w-lg mx-auto">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-cyan)] mb-3">
            // ready_to_launch
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Agent is Waiting for{' '}
            <span className="gradient-text">Instructions</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-8 leading-relaxed">
            Join thousands of operators who are turning AI agents into revenue
            machines. Start with the free tier or unlock everything today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Get Full Access — $197 <ArrowRight size={16} />
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-[var(--border)] text-[var(--text-secondary)] rounded-lg hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all text-sm"
            >
              Start Free
            </Link>
          </div>

          <p className="text-xs text-[var(--text-muted)] mt-4">
            30-day money-back guarantee · One payment, lifetime access · No
            subscription
          </p>
        </div>
      </div>
    </section>
  );
}
