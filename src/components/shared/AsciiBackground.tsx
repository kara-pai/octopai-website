'use client';

import { useEffect, useRef } from 'react';

// Alien code characters — mix of CJK-like symbols, box drawing, math, runic shapes
// These look like indecipherable alien code streaming down the screen
const ALIEN_CHARS =
  'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタ' +
  'ダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマ' +
  '01{}[]<>/\\|=+*~^&%$#@!?.:;' +
  '∀∂∃∅∇∈∉∋∏∑∧∨∩∪∫≈≠≡≤≥⊂⊃⊄⊆⊇' +
  '⌀⌁⌂⌃⌄⌇⌈⌉⌊⌋⌐⌑⌒⌓⎕⎖⎗⎘⎙⎚';

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  length: number;
}

export function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const FONT_SIZE = 14;
    const COL_WIDTH = FONT_SIZE;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create falling columns
    const columns: Column[] = [];
    const colCount = Math.ceil(canvas.width / COL_WIDTH);

    for (let i = 0; i < colCount; i++) {
      // Stagger start positions and speeds for organic feel
      const length = 8 + Math.floor(Math.random() * 20);
      const chars: string[] = [];
      for (let j = 0; j < length; j++) {
        chars.push(ALIEN_CHARS[Math.floor(Math.random() * ALIEN_CHARS.length)]);
      }
      columns.push({
        x: i * COL_WIDTH,
        y: -Math.random() * canvas.height * 2,
        speed: 0.5 + Math.random() * 2,
        chars,
        length,
      });
    }

    let animId: number;

    const draw = () => {
      // Fade previous frame instead of clearing — creates trail effect
      ctx.fillStyle = 'rgba(8, 8, 16, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;

      for (const col of columns) {
        for (let j = 0; j < col.length; j++) {
          const charY = col.y + j * FONT_SIZE;

          // Skip off-screen chars
          if (charY < -FONT_SIZE || charY > canvas.height + FONT_SIZE) continue;

          // Head character is brightest cyan, fades to purple down the tail
          const progress = j / col.length;
          if (j === 0) {
            // Bright head — white-cyan
            ctx.fillStyle = 'rgba(200, 240, 255, 0.9)';
          } else if (progress < 0.3) {
            // Near-head — bright cyan
            ctx.fillStyle = `rgba(0, 229, 255, ${0.6 - progress * 0.8})`;
          } else {
            // Tail — fading purple
            ctx.fillStyle = `rgba(124, 58, 255, ${0.35 - progress * 0.3})`;
          }

          ctx.fillText(col.chars[j], col.x, charY);

          // Randomly mutate characters for alien effect
          if (Math.random() < 0.02) {
            col.chars[j] = ALIEN_CHARS[Math.floor(Math.random() * ALIEN_CHARS.length)];
          }
        }

        // Move column down
        col.y += col.speed;

        // Reset when fully off screen
        if (col.y - col.length * FONT_SIZE > canvas.height) {
          col.y = -col.length * FONT_SIZE - Math.random() * 200;
          col.speed = 0.5 + Math.random() * 2;
          col.length = 8 + Math.floor(Math.random() * 20);
          col.chars = [];
          for (let j = 0; j < col.length; j++) {
            col.chars.push(ALIEN_CHARS[Math.floor(Math.random() * ALIEN_CHARS.length)]);
          }
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
      style={{ opacity: 0.35 }}
      aria-hidden="true"
    />
  );
}
