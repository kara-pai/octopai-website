import { PHASES } from '@/lib/constants';

export function PhasesSection() {
  return (
    <section id="phases" className="py-20">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
            The Program
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Six Phases. <span className="gradient-text">28 Days.</span> One Goal.
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            A structured path from agent architecture to revenue generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHASES.map((phase) => (
            <div key={phase.id} className="card p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[var(--accent-light)] flex items-center justify-center text-xs font-bold text-[var(--accent)]">
                    {phase.id}
                  </span>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {phase.name}
                  </h3>
                </div>
                <span className="text-xs text-[var(--text-muted)]">
                  Days {phase.days}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                {phase.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {phase.lessons.map((lesson) => (
                  <span
                    key={lesson}
                    className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                  >
                    {lesson}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
