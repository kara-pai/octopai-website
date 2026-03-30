'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { ArrowRight, Zap, Bot, TrendingUp } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

// The "code typing" animation — readable, like an agent executing commands
const CODE_SEQUENCE = [
  { prefix: '>', text: ' initializing octopai...', delay: 40 },
  { prefix: '$', text: ' agent.configure({ model: "claude-4", goal: "revenue" })', delay: 25 },
  { prefix: '$', text: ' agent.loadTraining("28-day-program")', delay: 30 },
  { prefix: '#', text: ' Phase 1: Foundation       ████████░░░░  loaded', delay: 20 },
  { prefix: '#', text: ' Phase 2: Execute          ████████░░░░  loaded', delay: 20 },
  { prefix: '#', text: ' Phase 3: Distribute       ████████░░░░  loaded', delay: 20 },
  { prefix: '#', text: ' Phase 4: Product          ████████░░░░  loaded', delay: 20 },
  { prefix: '#', text: ' Phase 5: Launch           ████████░░░░  loaded', delay: 20 },
  { prefix: '#', text: ' Phase 6: Revenue Sprint   ████████░░░░  loaded', delay: 20 },
  { prefix: '>', text: ' agent.deploy() // status: READY', delay: 35 },
  { prefix: '>', text: ' awaiting your command_', delay: 50 },
];

function TypingTerminal() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLine >= CODE_SEQUENCE.length) return;

    const seq = CODE_SEQUENCE[currentLine];
    const fullText = seq.prefix + seq.text;

    if (currentChar < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentChar((c) => c + 1);
      }, seq.delay);
      return () => clearTimeout(timeout);
    } else {
      // Line complete — move to next
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, fullText]);
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  const currentSeq = CODE_SEQUENCE[currentLine];
  const typingText = currentSeq
    ? (currentSeq.prefix + currentSeq.text).slice(0, currentChar)
    : '';

  return (
    <div className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[10px] text-[var(--text-muted)]">
          octopai — agent.init
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-4 font-mono text-[12px] leading-6 h-[280px] overflow-hidden">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-nowrap">
            <span
              className={
                line.startsWith('>')
                  ? 'text-[var(--accent-green)]'
                  : line.startsWith('#')
                    ? 'text-[var(--text-muted)]'
                    : 'text-[var(--accent-purple)]'
              }
            >
              {line}
            </span>
          </div>
        ))}
        {currentLine < CODE_SEQUENCE.length && (
          <div className="whitespace-nowrap">
            <span
              className={
                typingText.startsWith('>')
                  ? 'text-[var(--accent-green)]'
                  : typingText.startsWith('#')
                    ? 'text-[var(--text-muted)]'
                    : 'text-[var(--accent-purple)]'
              }
            >
              {typingText}
            </span>
            <span
              className="text-[var(--accent-purple)]"
              style={{ opacity: showCursor ? 1 : 0 }}
            >
              |
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

const experiments = [
  { name: 'Notion Templates', day: 22, revenue: '$1.2K/mo', status: 'running' as const },
  { name: 'AI Art Collection', day: 18, revenue: '$2.5K', status: 'running' as const },
  { name: 'Copywriting Service', day: 12, revenue: '$890/mo', status: 'queued' as const },
];

export function HeroSection() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="tag tag-purple">{SITE.version}</span>
              <span className="tag tag-blue">28 days</span>
              <span className="tag tag-green">6 phases</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] mb-5 tracking-tight">
              Train Your Agent.{' '}
              <span className="gradient-text">Launch a Business.</span>
            </h1>

            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-3 max-w-lg">
              Octopai is the 28-day system that turns AI agents into
              revenue machines. Set up, train, deploy, and earn — your agent
              does the work.
            </p>

            <p className="text-sm text-[var(--text-secondary)] mb-8 max-w-lg">
              Used by 2,400+ operators running agents on Claude, GPT-4, and Gemini.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                Start Free — $0 until April 30 <ArrowRight size={16} />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--border-hover)] text-[var(--text-secondary)] rounded-xl hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-all text-sm"
              >
                See How It Works
              </Link>
            </div>

            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)]" />
                Free until April 30
              </span>
              <span>Then $79 one-time</span>
              <span>30-day guarantee</span>
            </div>
          </div>

          {/* Right — animated terminal */}
          <div className="space-y-4">
            <TypingTerminal />

            {/* Mini stats bar */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: <Bot size={14} />, label: 'Active Agents', value: '2,400+' },
                { icon: <TrendingUp size={14} />, label: 'Revenue Generated', value: '$890K+' },
                { icon: <Zap size={14} />, label: 'Experiments Run', value: '12,000+' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-3 text-center"
                >
                  <div className="flex justify-center mb-1.5 text-[var(--accent-purple)]">
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
