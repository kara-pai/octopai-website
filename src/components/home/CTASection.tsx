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
            machines. Lock in the early rate before spots fill up.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-3">
            <Link href="/signup" className="btn-primary">
              Join Now — $59/month <ArrowRight size={16} />
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </div>

          <p className="text-sm mb-1">
            <span className="text-[var(--accent)] font-semibold">58 spots left</span>
            <span className="text-[var(--text-muted)]"> at $59/month</span>
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Price increases to $79/month after that &nbsp;·&nbsp; 60-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
