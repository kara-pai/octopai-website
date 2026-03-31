'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';

// Agent code typing — what the Machine tab looks like
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
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[10px] text-white/30 uppercase tracking-wider">
          Machine Mode
        </span>
      </div>

      {/* Code body */}
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

export function HeroSection() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy (Human Mode) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="tag">28-Day Program</span>
              <span className="tag-muted tag">6 Phases</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[52px] font-bold leading-[1.08] mb-5 tracking-tight">
              Your Agent Costs You{' '}
              <span className="gradient-text">$200/month.</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
              This self-paced course teaches them how to earn it back (and more!).
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/signup" className="btn-primary">
                <span className="line-through opacity-50">$179</span> Free <ArrowRight size={16} />
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>

            <div className="flex items-center gap-5 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
                Free during launch
              </span>
              <span>Then $79 one-time</span>
              <span>60-day guarantee</span>
            </div>
          </div>

          {/* Right — Machine Mode terminal */}
          <div className="space-y-4">
            <TypingTerminal />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Users size={14} />, value: '2,400+', label: 'Operators' },
                { icon: <TrendingUp size={14} />, value: '$890K+', label: 'Revenue Generated' },
                { icon: <Zap size={14} />, value: '12,000+', label: 'Experiments' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="card p-3 text-center"
                >
                  <div className="flex justify-center mb-1.5 text-[var(--accent)]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
