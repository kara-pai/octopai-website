import Link from 'next/link';
import {
  Beaker,
  Lightbulb,
  FolderArchive,
  FileText,
  ArrowRight,
  Download,
} from 'lucide-react';

const resources = [
  {
    icon: <Beaker size={24} />,
    title: 'Experiment Menu',
    description:
      '16 detailed recipes with step-by-step execution plans. Each experiment is designed to be run by your agent with minimal human input.',
    count: '16 recipes',
    color: 'green',
    cta: 'Browse Recipes',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Idea Generator',
    description:
      '300+ validated side hustle ideas organized by category, difficulty, and revenue potential. Complete with validation frameworks.',
    count: '300+ ideas',
    color: 'blue',
    cta: 'Generate Ideas',
  },
  {
    icon: <FolderArchive size={24} />,
    title: 'Architecture Bundle',
    description:
      'Complete agent architecture files: SOUL.md, MEMORY.md, AGENTS.md, SECURITY.md. Battle-tested templates ready to customize.',
    count: '4 templates',
    color: 'purple',
    cta: 'Download Bundle',
  },
  {
    icon: <FileText size={24} />,
    title: 'Documentation',
    description:
      'Comprehensive guides on agent setup, API integration, marketplace distribution, and revenue optimization.',
    count: '12 guides',
    color: 'orange',
    cta: 'Read Docs',
  },
];

const colorMap: Record<string, { text: string; glow: string }> = {
  green: { text: 'text-[var(--accent-cyan)]', glow: 'rgba(0,229,255,0.15)' },
  blue: { text: 'text-[var(--accent-blue)]', glow: 'rgba(0,170,255,0.15)' },
  purple: { text: 'text-[var(--accent-purple)]', glow: 'rgba(170,85,255,0.15)' },
  orange: { text: 'text-[var(--accent-orange)]', glow: 'rgba(255,136,0,0.15)' },
};

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-[var(--accent-cyan)] mb-2">
            // resources
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Free <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg">
            Explore these tools before enrolling. No signup required for basic
            access.
          </p>
        </div>

        {/* Resource cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((r) => {
            const c = colorMap[r.color];
            return (
              <div key={r.title} className="glow-card p-6 flex flex-col group">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: c.glow, color: `var(--accent-${r.color})` }}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${c.text}`}>
                      {r.title}
                    </h3>
                    <span className="text-[10px] text-[var(--text-muted)]">
                      {r.count}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                  {r.description}
                </p>

                <button className="self-start inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] text-sm text-[var(--text-secondary)] rounded-lg hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all group-hover:border-[var(--accent-cyan)] group-hover:text-[var(--accent-cyan)]">
                  {r.cta} <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Sample experiment cards */}
        <div className="mt-16">
          <h2 className="text-lg font-bold mb-6">
            <span className="gradient-text">Sample Experiments</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: 'Notion Template Store',
                difficulty: 'Beginner',
                ceiling: '$1.2K/mo',
                platform: 'Gumroad',
              },
              {
                name: 'AI Art Collection',
                difficulty: 'Intermediate',
                ceiling: '$5K/drop',
                platform: 'Etsy',
              },
              {
                name: 'Copywriting Service',
                difficulty: 'Beginner',
                ceiling: '$3K/mo',
                platform: 'Fiverr',
              },
              {
                name: 'Data Analysis Reports',
                difficulty: 'Advanced',
                ceiling: '$8K/mo',
                platform: 'Direct',
              },
              {
                name: 'Social Media Agent',
                difficulty: 'Intermediate',
                ceiling: '$2.5K/mo',
                platform: 'Upwork',
              },
              {
                name: 'Newsletter Automation',
                difficulty: 'Beginner',
                ceiling: '$1.8K/mo',
                platform: 'Substack',
              },
            ].map((exp) => (
              <div
                key={exp.name}
                className="border border-[var(--border)] rounded-xl p-4 hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-[var(--text-primary)]">
                    {exp.name}
                  </h4>
                  <span className="text-xs font-semibold text-[var(--accent-cyan)]">
                    {exp.ceiling}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="tag tag-blue text-[10px]">
                    {exp.difficulty}
                  </span>
                  <span className="tag tag-purple text-[10px]">
                    {exp.platform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
