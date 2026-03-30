import { Beaker, Lightbulb, FolderArchive, FileText, ArrowRight } from 'lucide-react';

const resources = [
  { icon: <Beaker size={22} />, title: 'Experiment Menu', description: '16 detailed recipes with step-by-step execution plans. Run by your agent with minimal human input.', count: '16 recipes', cta: 'Browse Recipes' },
  { icon: <Lightbulb size={22} />, title: 'Idea Generator', description: '300+ validated side hustle ideas organized by category, difficulty, and revenue potential.', count: '300+ ideas', cta: 'Generate Ideas' },
  { icon: <FolderArchive size={22} />, title: 'Architecture Bundle', description: 'Complete agent architecture files: SOUL.md, MEMORY.md, AGENTS.md, SECURITY.md.', count: '4 templates', cta: 'Download Bundle' },
  { icon: <FileText size={22} />, title: 'Documentation', description: 'Comprehensive guides on agent setup, API integration, marketplace distribution, and revenue optimization.', count: '12 guides', cta: 'Read Docs' },
];

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-main">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">Resources</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Free <span className="gradient-text">Resources</span></h1>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg">Explore these tools before enrolling. No signup required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resources.map((r) => (
            <div key={r.title} className="card p-6 flex flex-col group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">{r.title}</h3>
                  <span className="text-[10px] text-[var(--text-muted)]">{r.count}</span>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">{r.description}</p>
              <button className="btn-secondary self-start !py-2 !px-4 !text-[13px] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all">
                {r.cta} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-lg font-bold mb-6"><span className="gradient-text">Sample Experiments</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Notion Template Store', difficulty: 'Beginner', ceiling: '$1.2K/mo', platform: 'Gumroad' },
              { name: 'AI Art Collection', difficulty: 'Intermediate', ceiling: '$5K/drop', platform: 'Etsy' },
              { name: 'Copywriting Service', difficulty: 'Beginner', ceiling: '$3K/mo', platform: 'Fiverr' },
              { name: 'Data Analysis Reports', difficulty: 'Advanced', ceiling: '$8K/mo', platform: 'Direct' },
              { name: 'Social Media Agent', difficulty: 'Intermediate', ceiling: '$2.5K/mo', platform: 'Upwork' },
              { name: 'Newsletter Automation', difficulty: 'Beginner', ceiling: '$1.8K/mo', platform: 'Substack' },
            ].map((exp) => (
              <div key={exp.name} className="card p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-[var(--text-primary)]">{exp.name}</h4>
                  <span className="text-xs font-semibold text-[var(--accent)]">{exp.ceiling}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="tag text-[10px]">{exp.difficulty}</span>
                  <span className="tag-muted tag text-[10px]">{exp.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
