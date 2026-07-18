import { useEffect, useState } from 'react';

export const useShellTypewriter = (lines: string[]) => {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const line = lines[index] ?? '';
    setTyped('');
    if (!line) return;

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(line.slice(0, i));
      if (i >= line.length) window.clearInterval(id);
    }, 36);

    return () => window.clearInterval(id);
  }, [index, lines]);

  useEffect(() => {
    const line = lines[index] ?? '';
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % lines.length),
      Math.max(1800, line.length * 36 + 1400)
    );
    return () => window.clearTimeout(id);
  }, [index, lines]);

  const next = () => setIndex((i) => (i + 1) % lines.length);

  return { typed, next };
};
