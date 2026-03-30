'use client';

import { useState } from 'react';
import { PHASES } from '@/lib/constants';
import { BookOpen, Bot, DollarSign, Eye } from 'lucide-react';

type LessonType = 'review' | 'auto' | 'revenue';

interface Lesson {
  day: number;
  title: string;
  type: LessonType;
  phase: number;
}

const allLessons: Lesson[] = PHASES.flatMap((phase) => {
  const startDay = parseInt(phase.days.split('-')[0]);
  return phase.lessons.map((title, i) => ({
    day: startDay + i,
    title,
    type: (
      title.toLowerCase().includes('revenue') || title.toLowerCase().includes('pricing')
        ? 'revenue'
        : i % 3 === 0
          ? 'review'
          : 'auto'
    ) as LessonType,
    phase: phase.id,
  }));
});

const typeConfig: Record<LessonType, { icon: React.ReactNode; label: string; class: string }> = {
  review: {
    icon: <Eye size={12} />,
    label: 'Review',
    class: 'tag-blue',
  },
  auto: {
    icon: <Bot size={12} />,
    label: 'Auto',
    class: 'tag-green',
  },
  revenue: {
    icon: <DollarSign size={12} />,
    label: 'Revenue',
    class: 'tag-orange',
  },
};

export function CurriculumSection() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const filtered = activePhase
    ? allLessons.filter((l) => l.phase === activePhase)
    : allLessons;

  return (
    <section id="curriculum" className="py-20">
      <div className="container-main">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-blue)] mb-2">
            // curriculum
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="gradient-text">28 Lessons</span> to Agent Revenue
          </h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
            Each day takes 15-30 min. Toggle between Human and Machine mode.
          </p>
        </div>

        {/* Phase filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActivePhase(null)}
            className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
              activePhase === null
                ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)]'
                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            All
          </button>
          {PHASES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePhase(p.id)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                activePhase === p.id
                  ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)]'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Lesson list */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-[var(--border)] rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[48px_1fr_80px_80px] gap-2 px-4 py-2 bg-[var(--bg-secondary)] text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
              <span>Day</span>
              <span>Lesson</span>
              <span className="text-center">Type</span>
              <span className="text-center">Mode</span>
            </div>

            {filtered.map((lesson) => {
              const tc = typeConfig[lesson.type];
              return (
                <div
                  key={lesson.day}
                  className="grid grid-cols-[48px_1fr_80px_80px] gap-2 px-4 py-3 border-t border-[var(--border)] hover:bg-[var(--bg-hover)] transition-colors cursor-pointer group"
                >
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {String(lesson.day).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors flex items-center gap-2">
                    <BookOpen size={12} className="text-[var(--text-muted)]" />
                    {lesson.title}
                  </span>
                  <span className="flex justify-center">
                    <span className={`tag ${tc.class} text-[10px] gap-1`}>
                      {tc.icon}
                      {tc.label}
                    </span>
                  </span>
                  <span className="flex justify-center gap-1">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-hover)] text-[var(--text-muted)]">
                      H
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-hover)] text-[var(--text-muted)]">
                      M
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
