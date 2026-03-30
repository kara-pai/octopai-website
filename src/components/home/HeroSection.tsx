'use client';

import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { ArrowRight, Zap, Bot, TrendingUp } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

const ASCII_LOGO = `
 ██████╗  ██████╗████████╗ ██████╗ ██████╗  █████╗ ██╗
██╔═══██╗██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔══██╗██║
██║   ██║██║        ██║   ██║   ██║██████╔╝███████║██║
██║   ██║██║        ██║   ██║   ██║██╔═══╝ ██╔══██║██║
╚██████╔╝╚██████╗   ██║   ╚██████╔╝██║     ██║  ██║██║
 ╚═════╝  ╚═════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝
`.trim();

const experiments = [
  { name: 'Notion Templates', day: 22, revenue: '$1.2K/mo', status: 'running' },
  { name: 'AI Art Collection', day: 18, revenue: '$2.5K', status: 'running' },
  { name: 'Copywriting Service', day: 12, revenue: '$890/mo', status: 'queued' },
];

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container-main">
        {/* ASCII banner */}
        <pre
          className="text-[8px] sm:text-[10px] md:text-xs leading-tight text-[var(--accent-cyan)] mb-8 overflow-x-auto opacity-80"
          aria-hidden="true"
        >
          {ASCII_LOGO}
        </pre>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="tag tag-green">{SITE.version}</span>
              <span className="tag tag-blue">28 days</span>
              <span className="tag tag-purple">6 phases</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
              Your AI Agent Needs{' '}
              <span className="gradient-text">a Side Hustle</span>
            </h1>

            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 max-w-lg">
              {SITE.tagline} This self-paced course teaches your agents how to
              earn revenue — from architecture to first dollar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                $197 Free <ArrowRight size={16} />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-secondary)] rounded-lg hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all text-sm"
              >
                How It Works
              </Link>
            </div>

            <p className="text-xs text-[var(--text-muted)]">
              🟢 Free to use during launch period &nbsp;·&nbsp; One payment,
              lifetime access
            </p>
          </div>

          {/* Right — proof widget */}
          <div className="glow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                // proof_it_works
              </h3>
              <span className="tag tag-green text-[10px]">LIVE</span>
            </div>

            {/* Agent profile */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[var(--border)]">
              <div className="w-10 h-10 rounded-full bg-[var(--bg-hover)] flex items-center justify-center">
                <Logo size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                  Octopai Agent
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {SITE.twitter} · uptime 99.2%
                </p>
              </div>
            </div>

            {/* Revenue chart placeholder */}
            <div className="mb-5">
              <div className="flex items-end gap-1 h-20">
                {[12, 18, 25, 32, 28, 45, 52, 61, 58, 72, 85, 92].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all"
                      style={{
                        height: `${h}%`,
                        background:
                          i >= 10
                            ? 'var(--accent-cyan)'
                            : i >= 6
                              ? 'rgba(0,229,255,0.4)'
                              : 'rgba(124,58,255,0.2)',
                      }}
                    />
                  ),
                )}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-[var(--text-muted)]">
                  Week 1
                </span>
                <span className="text-[10px] text-[var(--text-muted)]">
                  Week 4
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { icon: <Bot size={14} />, label: 'Agents', value: '6' },
                {
                  icon: <TrendingUp size={14} />,
                  label: 'Revenue',
                  value: '$2.9K',
                },
                { icon: <Zap size={14} />, label: 'Experiments', value: '12' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="bg-[var(--bg-hover)] rounded-lg p-3 text-center"
                >
                  <div className="flex justify-center mb-1 text-[var(--accent-cyan)]">
                    {m.icon}
                  </div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {m.value}
                  </p>
                  <p className="text-[10px] text-[var(--text-muted)]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Running experiments */}
            <div>
              <p className="text-xs text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                Running Experiments
              </p>
              {experiments.map((exp) => (
                <div
                  key={exp.name}
                  className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${exp.status === 'running' ? 'bg-[var(--accent-cyan)]' : 'bg-[var(--accent-orange)]'}`}
                    />
                    <span className="text-xs text-[var(--text-primary)]">
                      {exp.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[var(--text-muted)]">
                      Day {exp.day}
                    </span>
                    <span className="text-xs font-medium text-[var(--accent-cyan)]">
                      {exp.revenue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
