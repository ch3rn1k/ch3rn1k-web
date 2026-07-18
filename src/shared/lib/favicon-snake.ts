const SIZE = 32;
const PAD = 1;
const CELL = 5;
const GRID = (SIZE - PAD * 2) / CELL;
const SNAKE_LEN = 4;
const TICK_MS = 140;

const buildRing = () => {
  const path: Array<[number, number]> = [];
  const max = GRID - 1;

  for (let x = 0; x <= max; x += 1) path.push([x, 0]);
  for (let y = 1; y <= max; y += 1) path.push([max, y]);
  for (let x = max - 1; x >= 0; x -= 1) path.push([x, max]);
  for (let y = max - 1; y >= 1; y -= 1) path.push([0, y]);

  return path;
};

const RING = buildRing();

const getIcon = () => document.querySelector<HTMLLinkElement>('link[rel="icon"]');

export const startFaviconSnake = () => {
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext('2d');
  const icon = getIcon();
  if (!ctx || !icon) return () => undefined;

  let head = 0;

  const paintCell = (gx: number, gy: number, color: string) => {
    ctx.fillStyle = color;
    ctx.fillRect(PAD + gx * CELL, PAD + gy * CELL, CELL, CELL);
  };

  const paint = () => {
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, SIZE, SIZE);

    for (let i = 0; i < SNAKE_LEN; i += 1) {
      const idx = (head - i + RING.length) % RING.length;
      const [gx, gy] = RING[idx];
      const t = 1 - i / SNAKE_LEN;
      const v = Math.round(40 + t * 215);
      paintCell(gx, gy, `rgb(${v},${v},${v})`);
    }

    const [hx, hy] = RING[head];
    paintCell(hx, hy, '#ffffff');

    icon.href = canvas.toDataURL('image/png');
    head = (head + 1) % RING.length;
  };

  paint();
  const id = window.setInterval(paint, TICK_MS);
  return () => window.clearInterval(id);
};
