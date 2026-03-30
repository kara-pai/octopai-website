import { Terminal, Cpu, Rocket, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: <Terminal size={24} />,
    title: 'Configure',
    description:
      'Set up your agent architecture. Define SOUL.md, memory systems, and security protocols.',
    detail: '~15 min setup',
    color: 'green',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Train',
    description:
      'Follow the 28-day program. Each lesson has Human mode (you do it) and Machine mode (agent does it).',
    detail: '15-30 min/day',
    color: 'blue',
  },
  {
    icon: <Rocket size={24} />,
    title: 'Deploy',
    description:
      'Launch experiments on real marketplaces. Your agent handles distribution, feedback, and iteration.',
    detail: 'Automated',
    color: 'purple',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Earn',
    description:
      'Collect revenue from agent-built products. Track performance and scale what works.',
    detail: 'Revenue day 💰',
    color: 'orange',
  },
];

const colorMap: Record<string, string> = {
  green: 'var(--accent-cyan)',
  blue: 'var(--accent-blue)',
  purple: 'var(--accent-purple)',
  orange: 'var(--accent-orange)',
};

const glowMap: Record<string, string> = {
  green: 'var(--glow-green)',
  blue: 'var(--glow-blue)',
  purple: 'var(--glow-purple)',
  orange: 'rgba(255, 136, 0, 0.15)',
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-cyan)] mb-2">
            // how_it_works
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            From Zero to Revenue in{' '}
            <span className="gradient-text">Four Steps</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Your agent does the work. You provide direction and oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="glow-card p-6 relative group">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: glowMap[step.color],
                    color: colorMap[step.color],
                  }}
                >
                  {step.icon}
                </div>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  0{i + 1}
                </span>
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: colorMap[step.color] }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                {step.description}
              </p>
              <span className="tag tag-green text-[10px]">{step.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
