'use client';

import { useState } from 'react';
import { Search, Users, Download, ArrowRight, Lock } from 'lucide-react';
import { SITE } from '@/lib/constants';

interface AgentTemplate {
  id: string;
  name: string;
  category: string;
  agentCount: number;
  description: string;
  roles: string[];
  extraRoles: number;
  channels?: string[];
  access: 'free' | 'member';
}

const TEMPLATES: AgentTemplate[] = [
  {
    id: 'dev-shop',
    name: 'The Dev Shop',
    category: 'Software Engineering',
    agentCount: 5,
    description:
      'A full-stack software development team capable of planning, building, testing, and deploying complex applications.',
    roles: ['Product Manager', 'Technical Lead', 'Frontend Engineer'],
    extraRoles: 2,
    access: 'free',
  },
  {
    id: 'marketing-growth',
    name: 'Marketing & Growth',
    category: 'Marketing & Advertising',
    agentCount: 5,
    description:
      'A creative and analytical marketing team focused on brand awareness, content generation, and user acquisition.',
    roles: ['Marketing Director', 'Content Strategist', 'Copywriter'],
    extraRoles: 2,
    access: 'free',
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    category: 'Customer Service',
    agentCount: 4,
    description:
      'A tiered support organization dedicated to resolving customer issues efficiently while maximizing satisfaction and retention.',
    roles: ['Support Manager', 'L1 Triage Agent', 'L2 Technical Support'],
    extraRoles: 1,
    access: 'member',
  },
  {
    id: 'financial-analysis',
    name: 'Financial Analysis',
    category: 'Finance',
    agentCount: 4,
    description:
      'A high-performance quantitative analysis team focused on market research, algorithmic trading strategies, and risk management.',
    roles: ['Portfolio Manager', 'Macro Analyst', 'Quantitative Researcher'],
    extraRoles: 1,
    access: 'member',
  },
  {
    id: 'personal-assistant',
    name: 'Personal Assistant',
    category: 'Personal',
    agentCount: 1,
    description:
      'A versatile solo agent for daily tasks — message management, reminders, web research, and smart home control.',
    roles: ['Personal Assistant'],
    extraRoles: 0,
    channels: ['Telegram', 'Discord'],
    access: 'free',
  },
  {
    id: 'dev-assistant',
    name: 'Dev Assistant',
    category: 'Software Engineering',
    agentCount: 1,
    description:
      'A solo coding companion with GitHub integration, browser automation, and code execution for rapid prototyping and debugging.',
    roles: ['Development Assistant'],
    extraRoles: 0,
    channels: ['Webchat'],
    access: 'member',
  },
];

const CATEGORIES = [
  'All',
  'Software Engineering',
  'Marketing & Advertising',
  'Customer Service',
  'Finance',
  'Personal',
];

export default function AgentsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = TEMPLATES.filter((t) => {
    const matchSearch =
      !search ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === 'All' || t.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container-main">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
            Agent Hub
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Agent <span className="gradient-text">Templates</span>
          </h1>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg">
            Pre-built agent teams ready to deploy. Free templates for everyone,
            premium templates for Octopai members.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Template grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((template) => (
            <div
              key={template.id}
              className="rounded-2xl border border-[var(--border)] bg-[#141418] text-[#fafaf7] overflow-hidden flex flex-col"
            >
              {/* Accent top bar */}
              <div className="h-1 bg-[var(--accent)]" />

              <div className="p-6 flex flex-col flex-1">
                {/* Top row — agent count + category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center">
                      <Users size={16} className="text-[var(--accent)]" />
                    </div>
                    <span className="text-xs font-mono text-white/60">
                      {template.agentCount} {template.agentCount === 1 ? 'Agent' : 'Agents'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/20">
                    {template.category}
                  </span>
                </div>

                {/* Name + description */}
                <h3 className="text-lg font-bold text-white mb-2 font-mono">
                  {template.name}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5 flex-1">
                  {template.description}
                </p>

                {/* Roles */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {template.roles.map((role) => (
                    <span
                      key={role}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.06] text-white/60 border border-white/[0.08]"
                    >
                      {role}
                    </span>
                  ))}
                  {template.extraRoles > 0 && (
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.06] text-white/40">
                      +{template.extraRoles} more
                    </span>
                  )}
                </div>

                {/* Channels (if any) */}
                {template.channels && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[11px] text-white/30 font-mono">Channels:</span>
                    {template.channels.map((ch) => (
                      <span
                        key={ch}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-white/50"
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto pt-2">
                  {template.access === 'free' ? (
                    <>
                      <a
                        href={SITE.whopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/[0.06] text-white/70 text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-all border border-white/[0.08]"
                      >
                        Use Template <ArrowRight size={14} />
                      </a>
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.06] text-white/40 hover:text-white/70 hover:bg-white/[0.1] transition-all border border-white/[0.08]">
                        <Download size={16} />
                      </button>
                    </>
                  ) : (
                    <>
                      <a
                        href={SITE.whopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium hover:bg-[var(--accent)]/20 transition-all border border-[var(--accent)]/20"
                      >
                        <Lock size={13} /> Members Only — Join
                      </a>
                      <button
                        disabled
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.03] text-white/20 border border-white/[0.05] cursor-not-allowed"
                      >
                        <Download size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-[var(--text-muted)]">No templates found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
