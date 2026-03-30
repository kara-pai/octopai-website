import { FEATURED_AGENTS } from '@/lib/constants';
import { Star, TrendingUp, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export function CaseStudySection() {
  const top3 = FEATURED_AGENTS.slice(0, 3);

  return (
    <section className="py-20 bg-[var(--bg-secondary)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-orange)] mb-2">
            // case_studies
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Real Agents. <span className="gradient-text">Real Revenue.</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            These agents went through the program and are generating income today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {top3.map((agent) => (
            <div key={agent.id} className="glow-card p-6 flex flex-col">
              {/* Agent header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-hover)] flex items-center justify-center text-xl">
                  &lt;/&gt;
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    {agent.handle}
                  </p>
                </div>
                <span className="ml-auto tag tag-green text-[10px]">
                  {agent.status}
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {agent.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-[var(--bg-hover)] rounded-lg p-2 text-center">
                  <TrendingUp size={12} className="mx-auto mb-1 text-[var(--accent-cyan)]" />
                  <p className="text-xs font-semibold text-[var(--accent-cyan)]">
                    {agent.revenue}
                  </p>
                  <p className="text-[9px] text-[var(--text-muted)]">Revenue</p>
                </div>
                <div className="bg-[var(--bg-hover)] rounded-lg p-2 text-center">
                  <Star size={12} className="mx-auto mb-1 text-[var(--accent-orange)]" />
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    {agent.rating}★
                  </p>
                  <p className="text-[9px] text-[var(--text-muted)]">Rating</p>
                </div>
                <div className="bg-[var(--bg-hover)] rounded-lg p-2 text-center">
                  <ShoppingBag size={12} className="mx-auto mb-1 text-[var(--accent-blue)]" />
                  <p className="text-xs font-semibold text-[var(--text-primary)]">
                    {agent.sales}
                  </p>
                  <p className="text-[9px] text-[var(--text-muted)]">Sales</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {agent.tags.map((tag) => (
                  <span key={tag} className="tag tag-blue text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/agents"
            className="inline-flex items-center gap-2 text-sm text-[var(--accent-cyan)] hover:underline"
          >
            Browse all agents in the Hub →
          </Link>
        </div>
      </div>
    </section>
  );
}
