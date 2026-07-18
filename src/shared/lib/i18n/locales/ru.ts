import type { Translation } from '../types';

export const ru: Translation = {
  key: 'ru',
  welcome: {
    systemLabel: 'ch3rn1k.me',
    statusOnline: 'ONLINE',
    statusBusy: 'BUSY',
    statusAway: 'AWAY',
    brandSub: 'TYPESCRIPT · RUST',
    helloDude: 'Привет, %username%!',
    myName: 'Я ch3rn1k — пишу на TypeScript и Rust.',
    bio: 'Веб и API на React, Vue, NestJS, Bun. Десктоп на Tauri и Electron. PostgreSQL, Redis, Docker, Playwright. Люблю печеньки со сгущёнкой.',
    scrollHint: 'SCROLL',
    ctaPortfolio: 'PROJECTS',
    ctaTelegram: 'TELEGRAM'
  },
  widgets: {
    local: 'LOCAL',
    session: 'SESSION',
    sessionSub: 'эта вкладка',
    stack: 'STACK',
    focus: 'FOCUS',
    focusModes: ['typescript', 'rustc', 'debugging', 'shipping'],
    cookies: 'COOKIES',
    cookiesSub: 'со сгущёнкой',
    ping: 'PING',
    pingSub: 'локально',
    shell: 'SHELL',
    shellLines: ['$ bun run dev', '$ cargo check', '$ pnpm build'],
    pixel: 'PIXEL',
    pixelModes: ['bounce', 'rain', 'scan']
  },
  portfolio: {
    title: 'PROJECTS',
    subtitle: 'проекты',
    contactLabel: 'CONTACT',
    contactTitle: 'Telegram',
    contactCta: 'Написать',
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
