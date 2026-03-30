'use client';

import { useState } from 'react';
import { PHASES } from '@/lib/constants';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  CheckCircle2,
  Lock,
  Play,
  ChevronRight,
} from 'lucide-react';

export default function TrainingPage() {
  const [expandedPhase, setExpandedPhase] = useState<number>(1);

  return (
    <div className="pt-24 pb-16">
      <div className="container-main max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-purple)] mb-2">
            // training_program
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            28-Day <span className="gradient-text-purple">Agent Training</span>
          </h1>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg">
            A structured program to take your AI agent from architecture to
            revenue. Each phase builds on the last.
          </p>
        </div>

        {/* Progress bar */}
        <div className="glow-card p-4 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[var(--text-muted)]">Progress</span>
            <span className="text-xs text-[var(--accent-cyan)]">0 / 28 days</span>
          </div>
          <div className="h-2 bg-[var(--bg-hover)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--accent-cyan)] rounded-full transition-all"
              style={{ width: '0%' }}
            />
          </div>
          <p className="text-[10px] text-[var(--text-muted)] mt-2">
            Sign up to start tracking your progress
          </p>
        </div>

        {/* Phases */}
        <div className="space-y-3">
          {PHASES.map((phase) => {
            const isExpanded = expandedPhase === phase.id;
            const startDay = parseInt(phase.days.split('-')[0]);

            return (
              <div
                key={phase.id}
                className="border border-[var(--border)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedPhase(isExpanded ? 0 : phase.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 hover:bg-[var(--bg-hover)] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-hover)] flex items-center justify-center text-xs font-bold text-[var(--accent-cyan)]">
                    {phase.id}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      {phase.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      Days {phase.days} · {phase.lessons.length} lessons
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-[var(--text-muted)] transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  />
                </button>

                {isExpanded && (
                  <div className="border-t border-[var(--border)]">
                    <p className="px-5 py-3 text-sm text-[var(--text-secondary)]">
                      {phase.description}
                    </p>
                    <div className="px-5 pb-4 space-y-1">
                      {phase.lessons.map((lesson, i) => {
                        const day = startDay + i;
                        const isLocked = true; // Demo: all locked until signup

                        return (
                          <div
                            key={lesson}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[var(--bg-hover)] transition-colors group"
                          >
                            <span className="text-xs font-mono text-[var(--text-muted)] w-8">
                              D{String(day).padStart(2, '0')}
                            </span>
                            {isLocked ? (
                              <Lock size={14} className="text-[var(--text-muted)]" />
                            ) : (
                              <CheckCircle2 size={14} className="text-[var(--accent-cyan)]" />
                            )}
                            <span className="flex-1 text-sm text-[var(--text-primary)]">
                              {lesson}
                            </span>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
                                <Clock size={10} /> 20 min
                              </span>
                              {!isLocked && (
                                <Play size={12} className="text-[var(--accent-cyan)]" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unlock CTA */}
        <div className="glow-card p-6 mt-8 text-center">
          <BookOpen size={24} className="mx-auto mb-3 text-[var(--accent-cyan)]" />
          <h3 className="text-lg font-semibold mb-2">Unlock All 28 Lessons</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4 max-w-md mx-auto">
            Get lifetime access to the full training program, including Human
            and Machine modes for every lesson.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            View Pricing →
          </Link>
        </div>
      </div>
    </div>
  );
}
