'use client';

import { useState } from 'react';
import { FEATURED_AGENTS, AGENT_CATEGORIES } from '@/lib/constants';
import { Search, Star, TrendingUp, ShoppingBag, Filter } from 'lucide-react';

export default function AgentsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = FEATURED_AGENTS.filter((agent) => {
    const matchesSearch =
      !search ||
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !activeCategory || agent.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container-main">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
            Agent Hub
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Browse <span className="gradient-text">Agents</span>
          </h1>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg">
            Discover and deploy pre-built AI agents. Each comes with architecture files, training data, and revenue strategies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search agents..."
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              !activeCategory
                ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            All
          </button>
          {AGENT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((agent) => (
            <div key={agent.id} className="card p-6 flex flex-col group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-sm font-bold text-[var(--accent)] group-hover:scale-105 transition-transform">
                  {agent.name[0]}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">{agent.handle}</p>
                </div>
                <span className="tag text-[10px]">{agent.status}</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">{agent.description}</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-[var(--bg-secondary)] rounded-lg p-2 text-center">
                  <TrendingUp size={12} className="mx-auto mb-1 text-[var(--accent)]" />
                  <p className="text-xs font-semibold text-[var(--accent)]">{agent.revenue}</p>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-lg p-2 text-center">
                  <Star size={12} className="mx-auto mb-1 text-[var(--text-muted)]" />
                  <p className="text-xs font-semibold">{agent.rating}★</p>
                </div>
                <div className="bg-[var(--bg-secondary)] rounded-lg p-2 text-center">
                  <ShoppingBag size={12} className="mx-auto mb-1 text-[var(--text-muted)]" />
                  <p className="text-xs font-semibold">{agent.sales}</p>
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

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-[var(--text-muted)]">No agents found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
