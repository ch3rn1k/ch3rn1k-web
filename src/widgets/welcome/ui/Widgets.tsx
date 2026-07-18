import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useTranslation } from '@/shared/lib/i18n';
import { COOKIE_KEY, PIXEL_COLS, STACK } from '../lib/constants';
import { useCardMagnet } from '../lib/use-card-magnet';
import { usePixelScreen } from '../lib/use-pixel-screen';
import { useSessionClock } from '../lib/use-session-clock';
import { useShellTypewriter } from '../lib/use-shell-typewriter';
import { WidgetCard } from './WidgetCard';
import styles from './Widgets.module.css';

const randomPing = () => 12 + ((Math.random() * 48) | 0);

export const Widgets = () => {
  const translation = useTranslation();
  const gridRef = useRef<HTMLDivElement>(null);
  const { time, date, uptime } = useSessionClock(translation.key);
  const { typed: shellTyped, next: nextShell } = useShellTypewriter(translation.widgets.shellLines);
  const { pixels, mode: pixelMode, nextMode: nextPixelMode } = usePixelScreen();
  useCardMagnet(gridRef);

  const [cookies, setCookies] = useState(() => {
    const raw = localStorage.getItem(COOKIE_KEY);
    const n = raw ? Number(raw) : 0;
    return Number.isFinite(n) ? n : 0;
  });
  const [cookiePop, setCookiePop] = useState(false);
  const [focusIndex, setFocusIndex] = useState(() => Math.floor(Math.random() * translation.widgets.focusModes.length));
  const [stackIndex, setStackIndex] = useState(0);
  const [ping, setPing] = useState(randomPing);
  const [pinging, setPinging] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => setStackIndex((i) => (i + 1) % STACK.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPing((p) => Math.max(8, Math.min(96, p + (((Math.random() * 11) | 0) - 5))));
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  const eatCookie = () => {
    setCookies((n) => {
      const next = n + 1;
      localStorage.setItem(COOKIE_KEY, String(next));
      return next;
    });
    setCookiePop(true);
    window.setTimeout(() => setCookiePop(false), 220);
  };

  const nextFocus = () => {
    setFocusIndex((i) => {
      const modes = translation.widgets.focusModes;
      if (modes.length < 2) return i;
      let next = i;
      while (next === i) next = Math.floor(Math.random() * modes.length);
      return next;
    });
  };

  const runPing = () => {
    setPinging(true);
    window.setTimeout(() => {
      setPing(randomPing());
      setPinging(false);
    }, 280);
  };

  return (
    <div ref={gridRef} className={styles.grid} style={{ '--pixel-cols': PIXEL_COLS } as CSSProperties}>
      <WidgetCard>
        <div className={styles.label}>{translation.widgets.local}</div>
        <div className={styles.value}>{time}</div>
        <div className={styles.sub}>{date}</div>
      </WidgetCard>

      <WidgetCard>
        <div className={styles.label}>{translation.widgets.session}</div>
        <div className={styles.value}>{uptime}</div>
        <div className={styles.sub}>{translation.widgets.sessionSub}</div>
      </WidgetCard>

      <WidgetCard onClick={() => setStackIndex((i) => (i + 1) % STACK.length)}>
        <div className={styles.label}>{translation.widgets.stack}</div>
        <div className={styles.valueSoft} key={STACK[stackIndex]}>
          {STACK[stackIndex]}
        </div>
      </WidgetCard>

      <WidgetCard onClick={nextFocus}>
        <div className={styles.label}>{translation.widgets.focus}</div>
        <div className={styles.valueSoft} key={focusIndex}>
          {translation.widgets.focusModes[focusIndex]}
        </div>
      </WidgetCard>

      <WidgetCard onClick={eatCookie}>
        <div className={styles.label}>{translation.widgets.cookies}</div>
        <div className={styles.value} data-pop={cookiePop}>
          {cookies}
        </div>
        <div className={styles.sub}>{translation.widgets.cookiesSub}</div>
      </WidgetCard>

      <WidgetCard onClick={runPing}>
        <div className={styles.label}>{translation.widgets.ping}</div>
        <div className={styles.value} data-busy={pinging}>
          {ping}
          <span className={styles.unit}>ms</span>
        </div>
        <div className={styles.sub}>{translation.widgets.pingSub}</div>
      </WidgetCard>

      <WidgetCard wide onClick={nextShell}>
        <div className={styles.label}>{translation.widgets.shell}</div>
        <div className={styles.terminal}>
          <span>{shellTyped}</span>
          <span className={styles.termCaret} aria-hidden />
        </div>
      </WidgetCard>

      <WidgetCard wide onClick={nextPixelMode}>
        <div className={styles.label}>{translation.widgets.pixel}</div>
        <div className={styles.pixelScreen} aria-hidden>
          {pixels.map((level, i) => (
            <span key={i} className={styles.pixel} data-level={level} />
          ))}
        </div>
        <div className={styles.sub}>{translation.widgets.pixelModes[pixelMode]}</div>
      </WidgetCard>
    </div>
  );
};
