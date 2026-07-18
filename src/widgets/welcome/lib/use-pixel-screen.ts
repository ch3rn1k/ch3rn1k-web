import { useEffect, useRef, useState } from 'react';
import { PIXEL_COLS, PIXEL_COUNT, PIXEL_ROWS, type PixelMode } from './constants';

const emptyPixels = () => Array.from({ length: PIXEL_COUNT }, () => 0);

export const usePixelScreen = () => {
  const [pixels, setPixels] = useState(emptyPixels);
  const [mode, setMode] = useState<PixelMode>(0);
  const state = useRef({
    x: 4,
    y: 2,
    vx: 1,
    vy: 1,
    scan: 0,
    rain: Array.from({ length: PIXEL_COLS }, () => Math.random() * PIXEL_ROWS)
  });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = window.setInterval(() => {
      const next = emptyPixels();
      const s = state.current;

      if (mode === 0) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x <= 0 || s.x >= PIXEL_COLS - 1) s.vx *= -1;
        if (s.y <= 0 || s.y >= PIXEL_ROWS - 1) s.vy *= -1;
        s.x = Math.max(0, Math.min(PIXEL_COLS - 1, s.x));
        s.y = Math.max(0, Math.min(PIXEL_ROWS - 1, s.y));

        const trail = [
          [s.x - s.vx * 2, s.y - s.vy * 2, 1],
          [s.x - s.vx, s.y - s.vy, 2],
          [s.x, s.y, 3]
        ] as const;

        for (const [px, py, level] of trail) {
          if (px < 0 || py < 0 || px >= PIXEL_COLS || py >= PIXEL_ROWS) continue;
          next[py * PIXEL_COLS + px] = Math.max(next[py * PIXEL_COLS + px], level);
        }
      } else if (mode === 1) {
        for (let col = 0; col < PIXEL_COLS; col += 1) {
          s.rain[col] += 0.35 + (col % 3) * 0.08;
          if (s.rain[col] > PIXEL_ROWS + 2) s.rain[col] = -Math.random() * 3;
          const head = Math.floor(s.rain[col]);
          for (let t = 0; t < 3; t += 1) {
            const row = head - t;
            if (row < 0 || row >= PIXEL_ROWS) continue;
            next[row * PIXEL_COLS + col] = 3 - t;
          }
        }
      } else {
        s.scan = (s.scan + 1) % PIXEL_COLS;
        for (let row = 0; row < PIXEL_ROWS; row += 1) {
          next[row * PIXEL_COLS + s.scan] = 3;
          if (s.scan > 0) next[row * PIXEL_COLS + s.scan - 1] = 2;
          if (s.scan > 1) next[row * PIXEL_COLS + s.scan - 2] = 1;
        }
      }

      setPixels(next);
    }, 90);

    return () => window.clearInterval(id);
  }, [mode]);

  const nextMode = () => setMode((m) => ((m + 1) % 3) as PixelMode);

  return { pixels, mode, nextMode };
};
