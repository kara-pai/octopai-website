'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PromptBlockProps {
  title?: string;
  prompt: string;
}

export function PromptBlock({ title, prompt }: PromptBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] overflow-hidden">
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
          <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">
            {title}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-[11px] text-white/40 hover:text-[var(--accent)] transition-colors"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? 'Copied' : 'Copy prompt'}
          </button>
        </div>
      )}
      <pre className="px-4 py-3 text-[12px] leading-[20px] text-white/70 whitespace-pre-wrap overflow-x-auto">
        {prompt}
      </pre>
    </div>
  );
}
