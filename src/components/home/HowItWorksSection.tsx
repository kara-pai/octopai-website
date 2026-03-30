import { Terminal, Cpu, Rocket, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: <Terminal size={22} />,
    num: '01',
    title: 'Configure',
    description: 'Set up your agent architecture. Define SOUL.md, memory systems, and security protocols.',
    detail: '~15 min setup',
  },
  {
    icon: <Cpu size={22} />,
    num: '02',
    title: 'Train',
    description: 'Follow the 28-day program. Human mode for you, Machine mode for your agent.',
    detail: '15-30 min/day',
  },
  {
    icon: <Rocket size={22} />,
    num: '03',
    title: 'Deploy',
    description: 'Launch experiments on real marketplaces. Your agent handles distribution and iteration.',
    detail: 'Automated',
  },
  {
    icon: <DollarSign size={22} />,
    num: '04',
    title: 'Earn',
    description: 'Collect revenue from agent-built products. Track performance and scale what works.',
    detail: 'Revenue day',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-[var(--bg-secondary)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
            How It Works
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            From Zero to Revenue in{' '}
            <span className="gradient-text">Four Steps</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Your agent does the work. You provide direction and oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div key={step.title} className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)]">
                  {step.icon}
                </div>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                {step.description}
              </p>
              <span className="tag text-[10px]">{step.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
