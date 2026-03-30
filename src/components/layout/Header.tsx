'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <Link
            href="/login"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Login
          </Link>
          <Link href="/signup" className="btn-primary !py-2 !px-5 !text-[13px]">
            Get Started →
          </Link>
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
            <div className="border-t border-[var(--border)] pt-3 mt-1 flex flex-col gap-2">
              <Link href="/login" className="text-sm text-[var(--text-secondary)]">
                Login
              </Link>
              <Link href="/signup" className="btn-primary text-center">
                Get Started →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
