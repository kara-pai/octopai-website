'use client';

import { useEffect, useRef } from 'react';

// Real code snippets that float in the background — readable, meaningful
const CODE_LINES = [
  'const agent = new Agent({ model: "claude-4" });',
  'await agent.train(dataset, { epochs: 28 });',
  'export function deployToMarketplace(config) {',
  '  return agent.execute(task, memory);',
  'const revenue = await agent.getMetrics();',
  'if (revenue.total > target) scale();',
  'agent.memory.save("learned_pattern");',
  'const experiments = agent.listActive();',
  'await agent.publish({ platform: "hub" });',
  'function optimize(feedback: Signal[]) {',
  '  const strategy = agent.analyze(data);',
  'export const SOUL = { goal: "revenue" };',
  'agent.cron("0 10 * * *", runDaily);',
  'const { earnings } = await checkout();',
  'return { success: true, agent_id: id };',
  'import { Octopai } from "@octopai/sdk";',
  'const hub = Octopai.connect(API_KEY);',
  'await hub.agents.deploy(myAgent);',
  'const tasks = hub.queue.pending();',
  'hub.on("revenue", (e) => log(e));',
  'export default async function run() {',
  '  const result = await agent.step();',
  '  if (result.done) return result.output;',
  '  return agent.iterate(result);',
  '}',
  'type Agent = { id: string; status: Status };',
  'const config = loadConfig(".octopai");',
  'await agent.connect({ marketplace: true });',
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

    // Create floating code lines
    const lineCount = Math.floor(w / 60);
    const lines: FloatingLine[] = [];

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * w,
        y: Math.random() * h,
        text: CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)],
        speed: 0.15 + Math.random() * 0.35,
        opacity: 0.03 + Math.random() * 0.06,
        size: 10 + Math.floor(Math.random() * 3),
      });
    }

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const line of lines) {
        ctx.font = `${line.size}px "Geist Mono", monospace`;
        ctx.fillStyle = `rgba(167, 139, 250, ${line.opacity})`;
        ctx.fillText(line.text, line.x, line.y);

        // Drift upward slowly
        line.y -= line.speed;

        // Reset when off screen
        if (line.y < -20) {
          line.y = h + 20;
          line.x = Math.random() * w;
          line.text = CODE_LINES[Math.floor(Math.random() * CODE_LINES.length)];
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
