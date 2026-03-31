'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { Menu, X, User, Bot } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';
import { useTheme } from '@/lib/theme-context';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/90 backdrop-blur-md">
      <div className="container-main flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Logo size={30} />
          <span className="font-bold text-lg tracking-tight text-[var(--text-primary)]">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Human / Machine toggle */}
          <button
            onClick={toggle}
            className="flex items-center h-8 rounded-lg border border-[var(--border)] overflow-hidden text-[12px] font-medium"
            aria-label={`Switch to ${mode === 'human' ? 'machine' : 'human'} mode`}
          >
            <span
              className={`flex items-center gap-1.5 px-3 h-full transition-all ${
                mode === 'human'
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
              }`}
            >
              <User size={12} /> Human
            </span>
            <span
              className={`flex items-center gap-1.5 px-3 h-full transition-all ${
                mode === 'machine'
                  ? 'bg-[var(--accent)] text-[#0a0a0d]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
              }`}
            >
              <Bot size={12} /> Machine
            </span>
          </button>

          <a href={SITE.whopUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !px-5 !text-[13px]">
            Get Started →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[var(--text-secondary)]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)]">
          <nav className="container-main py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-[var(--border)] pt-3 mt-1 flex flex-col gap-3">
              {/* Mobile toggle */}
              <button
                onClick={toggle}
                className="flex items-center h-9 rounded-lg border border-[var(--border)] overflow-hidden text-[12px] font-medium self-start"
              >
                <span
                  className={`flex items-center gap-1.5 px-3 h-full transition-all ${
                    mode === 'human'
                      ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                      : 'text-[var(--text-muted)]'
                  }`}
                >
                  <User size={12} /> Human
                </span>
                <span
                  className={`flex items-center gap-1.5 px-3 h-full transition-all ${
                    mode === 'machine'
                      ? 'bg-[var(--accent)] text-[#0a0a0d]'
                      : 'text-[var(--text-muted)]'
                  }`}
                >
                  <Bot size={12} /> Machine
                </span>
              </button>

              <a href={SITE.whopUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                Get Started →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
