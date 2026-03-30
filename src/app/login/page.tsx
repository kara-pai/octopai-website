'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth integration placeholder
    console.log('Login:', { email });
    alert('Auth integration will be connected here (NextAuth / Clerk).');
  };

  return (
    <div className="pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
      <div className="container-main max-w-sm">
        <div className="glow-card p-8">
          <div className="text-center mb-6">
            <span className="text-3xl mb-3 block text-[var(--accent-cyan)]">&lt;/&gt;</span>
            <h1 className="text-xl font-bold mb-1">Welcome back</h1>
            <p className="text-xs text-[var(--text-muted)]">
              Log in to {SITE.name}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-3 py-2.5 bg-[var(--bg-hover)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3 py-2.5 pr-10 bg-[var(--bg-hover)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2"
            >
              Log In <ArrowRight size={14} />
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              href="#"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <div className="border-t border-[var(--border)] mt-6 pt-4 text-center">
            <p className="text-xs text-[var(--text-muted)]">
              No account?{' '}
              <Link
                href="/signup"
                className="text-[var(--accent-cyan)] hover:underline"
              >
                Sign up free →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
