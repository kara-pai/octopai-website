'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import { ArrowRight, Eye, EyeOff, Check } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Auth integration will be connected here (NextAuth / Clerk).');
  };

  return (
    <div className="pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
      <div className="container-main max-w-sm">
        <div className="card p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3"><Logo size={36} /></div>
            <h1 className="text-xl font-bold mb-1">Create your account</h1>
            <p className="text-xs text-[var(--text-muted)]">Start building with {SITE.name}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1.5">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required
                className="w-full px-3 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1.5">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required
                className="w-full px-3 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
            <div>
              <label className="block text-xs text-[var(--text-muted)] mb-1.5">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required minLength={8}
                  className="w-full px-3 py-2.5 pr-10 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
            <button type="submit" className="btn-primary w-full">
              Create Account <ArrowRight size={14} />
            </button>
          </form>

          <div className="mt-6 space-y-2">
            {['Free access during launch', 'Full 28-day training program', '60-day money-back guarantee'].map((b) => (
              <div key={b} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                <Check size={12} className="text-[var(--accent)]" />
                {b}
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--border)] mt-6 pt-4 text-center">
            <p className="text-xs text-[var(--text-muted)]">
              Already have an account? <Link href="/login" className="text-[var(--accent)] hover:underline">Log in →</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
