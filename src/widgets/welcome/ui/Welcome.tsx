import { useState } from 'react';
import { StatusDot } from '@/shared/ui/status-dot';
import type { PortfolioStatus } from '@/shared/model/portfolio';
import { useTranslation } from '@/shared/lib/i18n';
import { useScramble } from '../lib/use-scramble';
import { Widgets } from './Widgets';
import styles from './Welcome.module.css';

const SKILLS = [
  'TypeScript',
  'Rust',
  'Bun',
  'React',
  'Vue',
  'NestJS',
  'Tauri',
  'Electron',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Playwright'
];

const BRAND = 'ch3rn1k';
const SCRAMBLE = '01ch3rn1k_x$#*+';
const NICKS = ['stranger', 'anon', 'guest', 'weeb', 'human', 'dev'];

type Presence = 'online' | 'busy' | 'away';
const PRESENCE: Presence[] = ['online', 'busy', 'away'];

const presenceStatus = (presence: Presence): PortfolioStatus => {
  if (presence === 'busy') return 'private';
  if (presence === 'away') return 'off';
  return 'on';
};

export const Welcome = () => {
  const translation = useTranslation();
  const { text: brand, busy: scrambling, scramble } = useScramble(BRAND, SCRAMBLE);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [nickIndex, setNickIndex] = useState(() => (Math.random() * NICKS.length) | 0);
  const [presenceIndex, setPresenceIndex] = useState(0);

  const presence = PRESENCE[presenceIndex];
  const presenceLabel =
    presence === 'busy'
      ? translation.welcome.statusBusy
      : presence === 'away'
        ? translation.welcome.statusAway
        : translation.welcome.statusOnline;

  const hello = translation.welcome.helloDude.replace('%username%', NICKS[nickIndex]);

  return (
    <section id="home" className={styles.container}>
      <div className={styles.statusBar}>
        <span>{translation.welcome.systemLabel}</span>
        <button
          type="button"
          className={styles.statusButton}
          onClick={() => setPresenceIndex((i) => (i + 1) % PRESENCE.length)}
          aria-label={presenceLabel}
        >
          <StatusDot status={presenceStatus(presence)} pulse={presence === 'online'} />
          <span key={presence} className={styles.statusLabel}>
            {presenceLabel}
          </span>
        </button>
      </div>

      <div className={styles.main}>
        <div className={styles.hero}>
          <button type="button" className={styles.brandButton} onClick={scramble} aria-label={BRAND}>
            <h1 className={styles.brand} data-scrambling={scrambling}>
              {brand}
            </h1>
          </button>
          <p className={styles.brandSub}>{translation.welcome.brandSub}</p>

          <div className={styles.bio}>
            <button
              type="button"
              className={styles.helloButton}
              onClick={() =>
                setNickIndex((i) => {
                  let next = i;
                  while (next === i) next = (Math.random() * NICKS.length) | 0;
                  return next;
                })
              }
              aria-label={hello}
            >
              <h2 className={styles.hello} key={hello}>
                {hello}
                <span className={styles.caret} aria-hidden />
              </h2>
            </button>
            <p className={styles.bioStrong}>{translation.welcome.myName}</p>
            <p className={styles.bioText}>{translation.welcome.bio}</p>
          </div>

          <ul className={styles.skills}>
            {SKILLS.map((skill) => (
              <li key={skill}>
                <button
                  type="button"
                  className={styles.skill}
                  data-active={activeSkill === skill}
                  onClick={() => setActiveSkill((prev) => (prev === skill ? null : skill))}
                  aria-pressed={activeSkill === skill}
                >
                  {skill}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a href="#apps" className={styles.action} data-primary="true">
              → {translation.welcome.ctaPortfolio}
            </a>
            <a href="https://t.me/ch3rn1k" target="_blank" rel="noreferrer" className={styles.action}>
              {translation.welcome.ctaTelegram}
            </a>
          </div>
        </div>

        <div className={styles.widgetsWrap}>
          <Widgets />
        </div>
      </div>

      <a href="#apps" className={styles.scrollHint}>
        <StatusDot pulse />
        {translation.welcome.scrollHint}
      </a>
    </section>
  );
};
