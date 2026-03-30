import { PHASES } from '@/lib/constants';

const colorStyles: Record<string, { border: string; text: string; bg: string }> = {
  green: {
    border: 'border-[rgba(0,229,255,0.3)]',
    text: 'text-[var(--accent-cyan)]',
    bg: 'bg-[rgba(0,229,255,0.08)]',
  },
  blue: {
    border: 'border-[rgba(0,170,255,0.3)]',
    text: 'text-[var(--accent-blue)]',
    bg: 'bg-[rgba(0,170,255,0.08)]',
  },
  purple: {
    border: 'border-[rgba(170,85,255,0.3)]',
    text: 'text-[var(--accent-purple)]',
    bg: 'bg-[rgba(170,85,255,0.08)]',
  },
  orange: {
    border: 'border-[rgba(255,136,0,0.3)]',
    text: 'text-[var(--accent-orange)]',
    bg: 'bg-[rgba(255,136,0,0.08)]',
  },
};

export function PhasesSection() {
  return (
    <section id="phases" className="py-20 bg-[var(--bg-secondary)]">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-purple)] mb-2">
            // phases
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Six Phases. <span className="gradient-text-purple">28 Days.</span>{' '}
            One Goal.
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            A structured path from agent architecture to revenue generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHASES.map((phase) => {
            const style = colorStyles[phase.color] ?? colorStyles.green;
            return (
              <div
                key={phase.id}
                className={`glow-card p-6 border ${style.border}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono uppercase tracking-wider ${style.text}`}
                  >
                    Phase {phase.id}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    Days {phase.days}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${style.text}`}>
                  {phase.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {phase.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {phase.lessons.map((lesson) => (
                    <span
                      key={lesson}
                      className={`text-[10px] px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}
                    >
                      {lesson}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
