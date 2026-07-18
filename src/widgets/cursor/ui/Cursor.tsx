import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, summary';

export const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    const sync = () => {
      const on = mq.matches && !reduce.matches;
      setEnabled(on);
      document.documentElement.classList.toggle('custom-cursor', on);
    };

    sync();
    mq.addEventListener('change', sync);
    reduce.addEventListener('change', sync);
    return () => {
      mq.removeEventListener('change', sync);
      reduce.removeEventListener('change', sync);
      document.documentElement.classList.remove('custom-cursor');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const isInteractive = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest(INTERACTIVE));

    const setActive = (on: boolean) => {
      ringRef.current?.setAttribute('data-active', String(on));
    };

    const setPressed = (on: boolean) => {
      ringRef.current?.setAttribute('data-pressed', String(on));
    };

    const onMove = (e: PointerEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      setVisible(true);
      setActive(isInteractive(e.target));
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onOver = (e: PointerEvent) => setActive(isInteractive(e.target));

    const tick = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.22;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.22;

      const { x, y } = pos.current;
      const rx = ringPos.current.x;
      const ry = ringPos.current.y;

      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (crossRef.current) crossRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;

      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointerover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className={styles.root} aria-hidden style={{ opacity: visible ? 1 : 0, transition: 'opacity 120ms ease' }}>
      <div ref={crossRef} className={styles.cross} />
      <div ref={ringRef} className={styles.ring} data-active="false" data-pressed="false" />
      <div ref={dotRef} className={styles.dot} />
    </div>
  );
};
