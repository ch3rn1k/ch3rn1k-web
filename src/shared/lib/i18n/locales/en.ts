import type { Translation } from '../types';

export const en: Translation = {
  key: 'en',
  welcome: {
    systemLabel: 'ch3rn1k.me',
    statusOnline: 'ONLINE',
    statusBusy: 'BUSY',
    statusAway: 'AWAY',
    brandSub: 'TYPESCRIPT · RUST',
    helloDude: 'Hi %username%!',
    myName: "I'm ch3rn1k — I write TypeScript and Rust.",
    bio: 'Web and APIs with React, Vue, NestJS, Bun. Desktop with Tauri and Electron. PostgreSQL, Redis, Docker, Playwright. Still into condensed milk cookies.',
    scrollHint: 'SCROLL',
    ctaPortfolio: 'PROJECTS',
    ctaTelegram: 'TELEGRAM'
  },
  widgets: {
    local: 'LOCAL',
    session: 'SESSION',
    sessionSub: 'this tab',
    stack: 'STACK',
    focus: 'FOCUS',
    focusModes: ['typescript', 'rustc', 'debugging', 'shipping'],
    cookies: 'COOKIES',
    cookiesSub: 'condensed milk',
    ping: 'PING',
    pingSub: 'local',
    shell: 'SHELL',
    shellLines: ['$ bun run dev', '$ cargo check', '$ pnpm build'],
    pixel: 'PIXEL',
    pixelModes: ['bounce', 'rain', 'scan']
  },
  portfolio: {
    title: 'PROJECTS',
    subtitle: 'projects',
    contactLabel: 'CONTACT',
    contactTitle: 'Telegram',
    contactCta: 'Message',
    copy: 'copy',
    copied: 'ok',
    categories: {
      discord: 'DISCORD',
      telegram: 'TELEGRAM',
      desktop: 'DESKTOP',
      mobile: 'MOBILE',
      web: 'WEB',
      others: 'OTHER'
    }
  }
};
