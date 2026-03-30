import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { Logo } from '@/components/shared/Logo';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Logo size={22} />
              <span className="font-bold text-[var(--text-primary)]">{SITE.name}</span>
            </div>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {SITE.tagline}
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Platform
            </h4>
            <ul className="space-y-2">
              {['Agent Hub', 'Training', 'Pricing', 'Resources'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              {['Experiment Menu', 'Idea Generator', 'Architecture Bundle', 'Documentation'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/resources"
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Connect
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Twitter / X', href: '#' },
                { label: 'Discord', href: '#' },
                { label: 'GitHub', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
            >
              Terms
            </Link>
            <span className="text-xs text-[var(--text-muted)]">SYSTEM {SITE.version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
