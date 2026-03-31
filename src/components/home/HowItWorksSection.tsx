'use client';

import { Terminal, Cpu, Rocket, DollarSign } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';
import { PromptBlock } from '@/components/shared/PromptBlock';

const steps = [
  { icon: <Terminal size={22} />, num: '01', title: 'Configure', description: 'Set up your agent architecture. Define SOUL.md, memory systems, and security protocols.', detail: '~15 min setup' },
  { icon: <Cpu size={22} />, num: '02', title: 'Train', description: 'Follow the 28-day program. Human mode for you, Machine mode for your agent.', detail: '15-30 min/day' },
  { icon: <Rocket size={22} />, num: '03', title: 'Deploy', description: 'Launch experiments on real marketplaces. Your agent handles distribution and iteration.', detail: 'Automated' },
  { icon: <DollarSign size={22} />, num: '04', title: 'Earn', description: 'Collect revenue from agent-built products. Track performance and scale what works.', detail: 'Revenue day' },
];

const DAILY_CRON_PROMPT = `# Daily agent schedule (cron)
# Paste into your agent's task runner

10:00  lesson       Read today's lesson from /training/day-{N}
13:00  audit        Review outputs from previous day
16:00  execute      Run today's experiment tasks
19:00  report       Log results to MEMORY.md

# Override: agent.schedule.set({
#   lesson:  "10:00",
#   audit:   "13:00",
#   execute: "16:00",
#   report:  "19:00"
# })`;

function HumanVersion() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {steps.map((step) => (
        <div key={step.title} className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)]">
              {step.icon}
            </div>
            <span className="text-xs text-[var(--text-muted)] font-mono">{step.num}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">{step.title}</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{step.description}</p>
          <span className="tag text-[10px]">{step.detail}</span>
        </div>
      ))}
    </div>
  );
}

function MachineVersion() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Pipeline visualization */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
        <p className="text-[11px] uppercase tracking-wider text-white/40 font-semibold mb-3">
          Execution Pipeline
        </p>
        <div className="flex items-center gap-2 text-[12px] font-mono flex-wrap">
          {['configure()', 'train(28d)', 'deploy()', 'earn()'].map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="text-[var(--text-primary)]">{step}</span>
              {i < 3 && <span className="text-[var(--accent)]">→</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Steps as structured data */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/[0.06]">
          <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
            Step Definitions
          </span>
        </div>
        {steps.map((step) => (
          <div key={step.num} className="flex items-start gap-4 px-4 py-3 border-b border-white/[0.04] last:border-0 text-[12px] font-mono">
            <span className="text-[var(--accent)] w-6 shrink-0">{step.num}</span>
            <span className="text-[var(--text-primary)] w-20 shrink-0">{step.title.toLowerCase()}</span>
            <span className="text-[var(--text-muted)] flex-1">{step.description}</span>
            <span className="text-[10px] text-[#4ade80] shrink-0">{step.detail}</span>
          </div>
        ))}
      </div>

      {/* Daily cron schedule */}
      <PromptBlock title="Daily Schedule — Copy to Agent" prompt={DAILY_CRON_PROMPT} />
    </div>
  );
}

export function HowItWorksSection() {
  const { mode } = useTheme();

  return (
    <section id="how-it-works" className="py-20 bg-[var(--bg-secondary)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
            {mode === 'human' ? 'How It Works' : '// how_it_works'}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {mode === 'human' ? (
              <>From Zero to Revenue in <span className="gradient-text">Four Steps</span></>
            ) : (
              <>pipeline<span className="text-[var(--accent)]">.execute()</span></>
            )}
          </h2>
          {mode === 'human' && (
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              Your agent does the work. You provide direction and oversight.
            </p>
          )}
        </div>

        {mode === 'human' ? <HumanVersion /> : <MachineVersion />}
      </div>
    </section>
  );
}
