'use client';

import { useEffect, useRef } from 'react';

// Agent-readable code — structured configs, function calls, data flows
// This is what an agent's "brain" looks like when processing
const AGENT_CODE = [
  '{"task":"analyze_market","status":"running","confidence":0.94}',
  'agent.execute(plan, {retry: 3, timeout: 30000})',
  'SOUL.md → goal: "generate_revenue" | mode: "autonomous"',
  'memory.store("pattern_437", {type: "success", revenue: 2400})',
  'fn deploy(config: AgentConfig) -> Result<Revenue>',
  '{"experiment":"notion_templates","day":22,"revenue":"$1.2K"}',
  'cron: 0 10 * * * → agent.run_daily_audit()',
  'hub.publish(agent_id, {marketplace: true, price: 79})',
  'validate(input) → transform(data) → distribute(output)',
  'AGENTS.md → skills: [research, create, distribute, sell]',
  'if confidence > 0.8 { scale(experiment) } else { iterate() }',
  '{"phase":3,"name":"distribute","progress":0.72,"active":true}',
  'agent.feedback_loop(buyer_signals, iteration_count)',
  'export const MEMORY = { learned: 847, applied: 612 }',
  'security.verify(credentials) → access.grant("hub")',
  'pipeline: idea → validate → build → launch → revenue',
  'agent.optimize({ metric: "conversion", target: 0.12 })',
  '{"agents_active":2400,"total_revenue":"$890K","uptime":99.2}',
  'hub.connect(API_KEY) → agent.train(program_28_day)',
  'result = await experiment.run({platform: "gumroad"})',
];

interface FloatingLine {
  x: number;
  y: number;
  text: string;
  speed: number;
  opacity: number;
  size: number;
}

export function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Sparse floating code lines
    const lineCount = Math.floor(w / 80);
    const lines: FloatingLine[] = [];

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * w * 0.8,
        y: Math.random() * h,
        text: AGENT_CODE[Math.floor(Math.random() * AGENT_CODE.length)],
        speed: 0.08 + Math.random() * 0.15,
        opacity: 0.04 + Math.random() * 0.04,
        size: 10 + Math.floor(Math.random() * 2),
      });
    }

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const line of lines) {
        ctx.font = `${line.size}px "Geist Mono", monospace`;
        ctx.fillStyle = `rgba(26, 26, 23, ${line.opacity})`;
        ctx.fillText(line.text, line.x, line.y);

        line.y -= line.speed;

        if (line.y < -20) {
          line.y = h + 20;
          line.x = Math.random() * w * 0.8;
          line.text = AGENT_CODE[Math.floor(Math.random() * AGENT_CODE.length)];
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
