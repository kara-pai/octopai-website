'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/theme-context';

const CODE_CHARS =
  '{}[]()<>=+-*/|&^%$#@!?:;.,~01' +
  'abcdefghijklmnopqrstuvwxyz' +
  'fnletconstifelse=>{};()' +
  'async await return export import' +
  '0123456789';

interface Column {
  x: number;
  y: number;
  speed: number;
  length: number;
  chars: string[];
}

export function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const FONT_SIZE = 13;
    const COL_GAP = FONT_SIZE + 2;

    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colCount = Math.ceil(w / COL_GAP);
    const columns: Column[] = [];

    const makeChars = (len: number) => {
      const chars: string[] = [];
      for (let j = 0; j < len; j++) {
        chars.push(CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]);
      }
      return chars;
    };

    for (let i = 0; i < colCount; i++) {
      const length = 6 + Math.floor(Math.random() * 18);
      columns.push({
        x: i * COL_GAP,
        y: -Math.random() * h * 2,
        speed: 0.3 + Math.random() * 1.2,
        length,
        chars: makeChars(length),
      });
    }

    let animId: number;

    // Colors adapt to mode
    const isHuman = mode === 'human';
    const fadeBg = isHuman ? 'rgba(250, 250, 247, 0.15)' : 'rgba(10, 10, 13, 0.12)';
    const headColor = isHuman ? 'rgba(212, 98, 10, 0.14)' : 'rgba(232, 122, 32, 0.7)';
    const nearColor = isHuman ? 'rgba(212, 98, 10, 0.09)' : 'rgba(232, 122, 32, 0.4)';
    const tailColor = isHuman ? 'rgba(26, 26, 23, 0.06)' : 'rgba(232, 122, 32, 0.12)';

    const draw = () => {
      ctx.fillStyle = fadeBg;
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${FONT_SIZE}px "Geist Mono", monospace`;

      for (const col of columns) {
        for (let j = 0; j < col.length; j++) {
          const charY = col.y + j * FONT_SIZE;
          if (charY < -FONT_SIZE || charY > h + FONT_SIZE) continue;

          const progress = j / col.length;

          if (j === 0) {
            ctx.fillStyle = headColor;
          } else if (progress < 0.25) {
            const alpha = isHuman ? 0.09 - progress * 0.15 : 0.4 - progress * 0.8;
            ctx.fillStyle = isHuman
              ? `rgba(212, 98, 10, ${Math.max(alpha, 0.01)})`
              : `rgba(232, 122, 32, ${Math.max(alpha, 0.05)})`;
          } else {
            const alpha = isHuman ? 0.06 - progress * 0.04 : 0.12 - progress * 0.1;
            ctx.fillStyle = isHuman
              ? `rgba(26, 26, 23, ${Math.max(alpha, 0.01)})`
              : `rgba(232, 122, 32, ${Math.max(alpha, 0.02)})`;
          }

          ctx.fillText(col.chars[j], col.x, charY);

          if (Math.random() < 0.015) {
            col.chars[j] = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
          }
        }

        col.y += col.speed;

        if (col.y - col.length * FONT_SIZE > h) {
          col.y = -col.length * FONT_SIZE - Math.random() * 300;
          col.speed = 0.3 + Math.random() * 1.2;
          col.length = 6 + Math.floor(Math.random() * 18);
          col.chars = makeChars(col.length);
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
