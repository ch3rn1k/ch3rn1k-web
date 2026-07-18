export type Locale = 'ru' | 'en';

export interface Translation {
  key: Locale;
  welcome: {
    systemLabel: string;
    statusOnline: string;
    statusBusy: string;
    statusAway: string;
    brandSub: string;
    helloDude: string;
    myName: string;
    bio: string;
    scrollHint: string;
    ctaPortfolio: string;
    ctaTelegram: string;
  };
  widgets: {
    local: string;
    session: string;
    sessionSub: string;
    stack: string;
    focus: string;
    focusModes: string[];
    cookies: string;
    cookiesSub: string;
    ping: string;
    pingSub: string;
    shell: string;
    shellLines: string[];
    pixel: string;
    pixelModes: string[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    contactLabel: string;
    contactTitle: string;
    contactCta: string;
    copy: string;
    copied: string;
    categories: {
      discord: string;
      telegram: string;
      desktop: string;
      mobile: string;
      web: string;
      others: string;
    };
  };
}
