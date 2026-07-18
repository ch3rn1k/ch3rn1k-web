import { useEffect, type RefObject } from 'react';
import styles from '../ui/Widgets.module.css';

export const useCardMagnet = (gridRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduce.matches) return;

    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(`.${styles.card}`));
    const motion = cards.map(() => ({ x: 0, y: 0 }));
    const mouse = { x: 0, y: 0 };
    let hoverIndex = -1;
    let raf = 0;
    const cleanups: Array<() => void> = [];

    cards.forEach((card, i) => {
      const onEnter = () => {
        hoverIndex = i;
        card.style.zIndex = '2';
      };
      const onLeave = () => {
        if (hoverIndex === i) hoverIndex = -1;
        card.style.zIndex = '';
      };
      card.addEventListener('pointerenter', onEnter);
      card.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('pointerenter', onEnter);
        card.removeEventListener('pointerleave', onLeave);
        card.style.zIndex = '';
        card.style.transform = '';
      });
    });

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const tick = () => {
      const gridRect = grid.getBoundingClientRect();

      cards.forEach((card, i) => {
        const cur = motion[i];
        let tx = 0;
        let ty = 0;

        if (hoverIndex === i && card.offsetWidth > 0 && card.offsetHeight > 0) {
          const cx = gridRect.left + card.offsetLeft + card.offsetWidth / 2;
          const cy = gridRect.top + card.offsetTop + card.offsetHeight / 2;
          tx = Math.max(-7, Math.min(7, (mouse.x - cx) * 0.1));
          ty = Math.max(-7, Math.min(7, (mouse.y - cy) * 0.1));
        }

        cur.x += (tx - cur.x) * 0.16;
        cur.y += (ty - cur.y) * 0.16;

        if (Math.abs(cur.x) < 0.05 && Math.abs(cur.y) < 0.05 && hoverIndex !== i) {
          card.style.transform = '';
          return;
        }

        card.style.transform = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0)`;
      });

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      cleanups.forEach((fn) => fn());
    };
  }, [gridRef]);
};
