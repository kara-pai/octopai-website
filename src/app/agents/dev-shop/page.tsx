'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Copy, Check, Download, Users } from 'lucide-react';

const TEMPLATE_JSON = `{
  "agents": {
    "defaults": {
      "workspace": "~/.openclaw/workspace",
      "model": {
        "primary": "anthropic/claude-sonnet-4-5",
        "fallbacks": [
          "anthropic/claude-haiku-3-5"
        ]
      },
      "thinkingDefault": "low"
    },
    "list": [
      {
        "id": "agent-pm",
        "default": true,
        "identity": {
          "name": "Alex",
          "emoji": "bot"
        }
      },
      {
        "id": "agent-tech-lead",
        "identity": {
          "name": "Jordan",
          "emoji": "bot"
        }
      },
      {
        "id": "agent-frontend",
        "identity": {
          "name": "Taylor",
          "emoji": "bot"
        }
      },
      {
        "id": "agent-backend",
        "identity": {
          "name": "Casey",
          "emoji": "bot"
        }
      },
      {
        "id": "agent-qa",
        "identity": {
          "name": "Sam",
          "emoji": "bot"
        }
      }
    ]
  },
  "skills": {
    "entries": {
      "jira-api": { "enabled": true },
      "notion": { "enabled": true },
      "web-search": { "enabled": true },
      "product-analytics": { "enabled": true },
      "github-api": { "enabled": true },
      "code-execution": { "enabled": true },
      "aws-cli": { "enabled": true },
      "architecture-diagramming": { "enabled": true },
      "figma-api": { "enabled": true },
      "browser-automation": { "enabled": true },
      "lighthouse": { "enabled": true },
      "sql-client": { "enabled": true },
      "docker": { "enabled": true },
      "postman-api": { "enabled": true },
      "playwright": { "enabled": true },
      "cypress": { "enabled": true }
    }
  }
}`;

export default function DevShopPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TEMPLATE_JSON);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([TEMPLATE_JSON], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'the-dev-shop.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-main max-w-4xl">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/agents"
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft size={16} /> Back
          </Link>
        </div>

        {/* Template header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[var(--accent-light)] flex items-center justify-center">
            <Users size={20} className="text-[var(--accent)]" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-mono">The Dev Shop</h1>
            <p className="text-xs text-[var(--text-muted)]">
              5 Agents &nbsp;·&nbsp; Software Engineering &nbsp;·&nbsp; Free
            </p>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-2xl">
          A full-stack software development team capable of planning, building,
          testing, and deploying complex applications.
        </p>

        {/* JSON viewer */}
        <div className="rounded-2xl border border-[var(--border)] overflow-hidden bg-[#141418]">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
            <span className="text-sm font-mono text-white/80">the-dev-shop.json</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-white/30 uppercase tracking-wider mr-2">
                JSON
              </span>
            </div>
          </div>

          {/* Code block */}
          <pre className="px-5 py-5 text-[13px] leading-[22px] text-white/70 overflow-x-auto max-h-[600px] overflow-y-auto font-mono">
            {TEMPLATE_JSON}
          </pre>

          {/* Bottom actions */}
          <div className="flex items-center gap-3 px-5 py-3 border-t border-white/[0.06]">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] text-white/70 text-sm font-medium hover:bg-white/[0.1] hover:text-white transition-all border border-white/[0.08]"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-[#141418] text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Download size={14} /> JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
