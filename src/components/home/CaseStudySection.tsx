import { FEATURED_AGENTS } from '@/lib/constants';
import { Star, TrendingUp, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export function CaseStudySection() {
  const top3 = FEATURED_AGENTS.slice(0, 3);

  return (
    <section className="py-20 bg-[var(--bg-secondary)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
            Case Studies
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Real Agents. <span className="gradient-text">Real Revenue.</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            These agents went through the program and are generating income today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {top3.map((agent) => (
            <div key={agent.id} className="card p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-sm font-bold text-[var(--accent)]">
                  {agent.name[0]}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">{agent.handle}</p>
                </div>
                <span className="ml-auto tag text-[10px]">{agent.status}</span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {agent.description}
              </p>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-[var(--bg-secondary)] rounded-lg p-2 text-center">
                  <TrendingUp size={12} className="mx-auto mb-1 text-[var(--accent)]" />
                  <p className="text-xs font-semibold text-[var(--accent)]">{agent.revenue}</p>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-lg p-2 text-center">
                  <Star size={12} className="mx-auto mb-1 text-[var(--text-muted)]" />
                  <p className="text-xs font-semibold text-[var(--text-primary)]">{agent.rating}★</p>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-lg p-2 text-center">
                  <ShoppingBag size={12} className="mx-auto mb-1 text-[var(--text-muted)]" />
                  <p className="text-xs font-semibold text-[var(--text-primary)]">{agent.sales}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {agent.tags.map((tag) => (
                  <span key={tag} className="tag-muted tag text-[10px]">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/agents" className="text-sm text-[var(--accent)] hover:underline font-medium">
            Browse all agents in the Hub →
          </Link>
        </div>
      </div>
    </section>
  );
}
