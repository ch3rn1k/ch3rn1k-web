import { useEffect, useRef, useState } from 'react';
import { formatUptime } from '@/shared/lib/format-uptime';
import type { Locale } from '@/shared/lib/i18n';

export const useSessionClock = (locale: Locale) => {
  const startedAt = useRef(Date.now());
  const [now, setNow] = useState(() => new Date());
  const [uptime, setUptime] = useState('00:00:00');

  useEffect(() => {
    const id = window.setInterval(() => {
      setNow(new Date());
      setUptime(formatUptime(Date.now() - startedAt.current));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const tag = locale === 'ru' ? 'ru-RU' : 'en-GB';
  const time = now.toLocaleTimeString(tag, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  const date = now.toLocaleDateString(tag, { weekday: 'short', day: '2-digit', month: 'short' });

  return { time, date, uptime };
};
