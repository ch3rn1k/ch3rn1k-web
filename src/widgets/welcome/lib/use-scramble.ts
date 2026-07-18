import { useEffect, useRef, useState } from 'react';

export const useScramble = (value: string, alphabet: string) => {
  const [text, setText] = useState(value);
  const [busy, setBusy] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  const scramble = () => {
    if (busy) return;
    setBusy(true);
    let frame = 0;
    if (timer.current) window.clearInterval(timer.current);

    timer.current = window.setInterval(() => {
      frame += 1;
      if (frame > 12) {
        setText(value);
        setBusy(false);
        if (timer.current) window.clearInterval(timer.current);
        return;
      }

      setText(
        value
          .split('')
          .map((char, i) => (i < frame - 4 ? char : alphabet[(Math.random() * alphabet.length) | 0]))
          .join('')
      );
    }, 40);
  };

  return { text, busy, scramble };
};
