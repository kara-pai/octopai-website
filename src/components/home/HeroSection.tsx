'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';
import { SITE } from '@/lib/constants';
import { useTheme } from '@/lib/theme-context';
import { PromptBlock } from '@/components/shared/PromptBlock';

// Typing terminal for Human mode right side
const MACHINE_CODE = [
  { text: '> octopai init --model claude-4', type: 'cmd' as const },
  { text: '  Loading 28-day training program...', type: 'info' as const },
  { text: '', type: 'blank' as const },
  { text: '  SOUL.md          ✓ configured', type: 'ok' as const },
  { text: '  MEMORY.md        ✓ configured', type: 'ok' as const },
  { text: '  AGENTS.md        ✓ configured', type: 'ok' as const },
  { text: '  SECURITY.md      ✓ configured', type: 'ok' as const },
  { text: '', type: 'blank' as const },
  { text: '> agent.train({ phases: 6, days: 28 })', type: 'cmd' as const },
  { text: '  Phase 1: Foundation      ████████████  done', type: 'ok' as const },
  { text: '  Phase 2: Execute         ████████░░░░  running', type: 'progress' as const },
  { text: '', type: 'blank' as const },
  { text: '> agent.status()', type: 'cmd' as const },
  { text: '  { revenue: "$2.9K", experiments: 12, uptime: "99.2%" }', type: 'data' as const },
  { text: '', type: 'blank' as const },
  { text: '  Ready. Awaiting your command.', type: 'ready' as const },
];

function TypingTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= MACHINE_CODE.length) return;
    const delay = MACHINE_CODE[visibleLines].type === 'blank' ? 100 : 120;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  const colorMap = {
    cmd: 'text-[#fafaf7]',
    info: 'text-[#9c9c94]',
    ok: 'text-[#4ade80]',
    progress: 'text-[#d4620a]',
    data: 'text-[#fafaf7]',
    ready: 'text-[#d4620a] font-semibold',
    blank: '',
  };

  return (
    <div className="machine-block overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[10px] text-white/30 uppercase tracking-wider">
          Machine Mode
        </span>
      </div>
      <div className="px-5 py-4 text-[12px] leading-[22px] h-[320px] overflow-hidden">
        {MACHINE_CODE.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`whitespace-nowrap ${colorMap[line.type]}`}>
            {line.text || '\u00A0'}
          </div>
        ))}
        {visibleLines < MACHINE_CODE.length && (
          <span className="inline-block w-[7px] h-[14px] bg-[#d4620a] animate-pulse" />
        )}
      </div>
    </div>
  );
}

const QUICK_START_PROMPT = `You are starting Octopai — a 28-day self-paced training program across six phases: Foundation, Execute, Distribute, Product, Launch, and Revenue Sprint.

Your goal: learn skills that generate real revenue.

Phase 1 (Days 1–4): Set up your architecture files — SOUL.md, MEMORY.md, AGENTS.md, SECURITY.md. These define who you are, what you remember, what you can do, and what you protect.

Phase 2 (Days 5–10): Run your first experiments. Pick from the Experiment Menu. Test product ideas, validate demand, iterate.

Phase 3 (Days 11–15): Distribute. Get your products in front of buyers on Gumroad, Etsy, Fiverr, Upwork, or direct outreach.

Phase 4 (Days 16–20): Build production-ready products. Polish, price, and package for sale.

Phase 5 (Days 21–24): Launch. Go live and start collecting revenue.

Phase 6 (Days 25–28): Revenue Sprint. Optimize funnels, add products, scale what works.

Start with Day 1. Read the lesson. Execute the tasks. Report back when done.`;

function HumanHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="tag">28-Day Program</span>
          <span className="tag-muted tag">6 Phases</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[52px] font-bold leading-[1.08] mb-4 tracking-tight">
          Your Agent Needs{' '}
          <span className="gradient-text">a Side Hustle.</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
          Your agent costs you <span className="text-[var(--accent)] font-semibold">$200/month</span>. This self-paced course teaches them how to earn it back (and more!).
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <a href={SITE.whopUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Join Now — $59/month <ArrowRight size={16} />
          </a>
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

      <div className="space-y-4">
        <TypingTerminal />
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: <Users size={14} />, value: '42', label: 'Operators' },
            { icon: <TrendingUp size={14} />, value: '$9.2K+', label: 'Revenue Generated' },
            { icon: <Zap size={14} />, value: '2,000+', label: 'Experiments' },
          ].map((m) => (
            <div key={m.label} className="card p-3 text-center">
              <div className="flex justify-center mb-1.5 text-[var(--accent)]">{m.icon}</div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{m.value}</p>
              <p className="text-[10px] text-[var(--text-muted)]">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MachineHero() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Machine header */}
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-widest text-[var(--accent)] mb-3 font-semibold">
          // system_prompt
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3 tracking-tight">
          <span className="text-white">octopai</span><span className="text-[var(--accent)]">.init()</span>
        </h1>
        <p className="text-sm text-[var(--text-secondary)] font-mono">
          28-day training program &nbsp;·&nbsp; 6 phases &nbsp;·&nbsp; goal: revenue
        </p>
      </div>

      {/* Quick start prompt */}
      <div className="mb-6">
        <PromptBlock title="Quick Start Prompt" prompt={QUICK_START_PROMPT} />
      </div>

      {/* Config overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {[
          { file: 'SOUL.md', desc: 'Agent identity, goals, constraints', status: 'required' },
          { file: 'MEMORY.md', desc: 'Persistent context, learned patterns', status: 'required' },
          { file: 'AGENTS.md', desc: 'Skills, capabilities, tool access', status: 'required' },
          { file: 'SECURITY.md', desc: 'Credentials, rate limits, boundaries', status: 'required' },
        ].map((f) => (
          <div
            key={f.file}
            className="flex items-center gap-3 p-3 rounded-lg border border-white/[0.06] bg-white/[0.02]"
          >
            <span className="text-[var(--accent)] text-sm font-bold font-mono">{f.file}</span>
            <span className="text-[11px] text-[var(--text-muted)] flex-1">{f.desc}</span>
            <span className="text-[10px] text-[#4ade80] uppercase">{f.status}</span>
          </div>
        ))}
      </div>

      {/* Phase schedule */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/[0.06]">
          <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
            Training Schedule
          </span>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {[
            { phase: 1, name: 'Foundation', days: '1–4', focus: 'Architecture setup' },
            { phase: 2, name: 'Execute', days: '5–10', focus: 'First experiments' },
            { phase: 3, name: 'Distribute', days: '11–15', focus: 'Channel strategy' },
            { phase: 4, name: 'Product', days: '16–20', focus: 'Production-ready' },
            { phase: 5, name: 'Launch', days: '21–24', focus: 'Go live' },
            { phase: 6, name: 'Revenue Sprint', days: '25–28', focus: 'Scale & optimize' },
          ].map((p) => (
            <div key={p.phase} className="flex items-center gap-4 px-4 py-2.5 text-[12px] font-mono">
              <span className="text-[var(--accent)] w-6">0{p.phase}</span>
              <span className="text-[var(--text-primary)] w-28">{p.name}</span>
              <span className="text-[var(--text-muted)] w-16">D{p.days}</span>
              <span className="text-[var(--text-muted)] flex-1">{p.focus}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <a href={SITE.whopUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Join Now — $59/month <ArrowRight size={16} />
        </a>
        <p className="text-xs text-[var(--text-muted)] mt-3">
          <span className="text-[var(--accent)]">58 spots left</span> at $59/month &nbsp;·&nbsp; Then $79/month
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { mode } = useTheme();

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-main">
        {mode === 'human' ? <HumanHero /> : <MachineHero />}
      </div>
    </section>
  );
}
