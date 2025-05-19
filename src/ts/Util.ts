import { TranslationProps } from './Interface';

declare global {
  interface Window {
    originalFavicon?: string;
  }
}

export const getTranslation = (): TranslationProps => {
  return navigator.language === 'ru-RU' || navigator.language === 'ru'
    ? {
        key: 'ru',
        welcome: {
          typicalIT: 'Типичный IT',
          aLotOfCode: 'Много кода',
          bitDesign: 'Чуть дизайна',
          someHW: 'Малость железа',
          helloDude: 'Привет, %username%!',
          myName: 'Меня зовут ch3rn1k, и я Full Stack TS.',
          miscText: ['Крафчу сайты, crm-системы, серверные скрипты.', 'Могу создавать приложения на телефон и ПК. (:'],
          whatIAmDoing: [
            'Умею создавать удобные интерфейсы в сложных системах - UX / UI.',
            'Простыми словами - человек-мультитул.',
            'Люблю печеньки со сгущенкой.'
          ]
        },
        portfolio: {
          title: 'Портфолио',
          thatsMe: 'На самом деле, вот я:'
        },
        messageMePlease: 'Напиши мне, не стесняйся!'
      }
    : {
        key: 'en',
        welcome: {
          typicalIT: 'Typical IT',
          aLotOfCode: 'Some code',
          bitDesign: 'Bit design',
          someHW: 'Pinch HW',
          helloDude: 'Hi %username%!',
          myName: "My name is ch3rn1k and I'm Full Stack TS.",
          miscText: ['Crafting websites, crm systems, server scripts.', 'I can create apps for my phone and PC. (:'],
          whatIAmDoing: [
            'I can create user-friendly interfaces in complex systems - UX / UI.',
            'In simple words, a multi-tool man.',
            'I love condensed milk cookies.'
          ]
        },
        portfolio: {
          title: 'Portfolio',
          thatsMe: 'Actually, here I am:'
        },
        messageMePlease: "Message me, don't be shy!"
      };
};

export const getOS = () => {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  if (macosPlatforms.indexOf(platform) !== -1) return 'Mac OS';
  else if (iosPlatforms.indexOf(platform) !== -1) return 'iOS';
  else if (windowsPlatforms.indexOf(platform) !== -1) return 'Windows';
  else if (/Android/.test(userAgent)) return 'Android';
  else if (/Linux/.test(platform)) return 'Linux';

  return null;
};

export const pageIconRandomizer = () => {
  const emojiList = [
    '🤡',
    '😂',
    '😍',
    '😏',
    '🤔',
    '😎',
    '🌚',
    '🌝',
    '👅',
    '💩',
    '🥴',
    '🤕',
    '🤤',
    '🤬',
    '🥳',
    '🤪',
    '😜',
    '🤓',
    '🤯',
    '🥸',
    '🤠',
    '👻',
    '👾',
    '🤖',
    '👽',
    '🦄',
    '🦋',
    '🦁',
    '🐸',
    '🐙',
    '🦑',
    '🦀',
    '🦞',
    '🦐',
    '🦪',
    '🍕',
    '🍔',
    '🍟',
    '🌮',
    '🌯',
    '🍿',
    '🍪',
    '🍭',
    '🍩'
  ];

  if (!window.originalFavicon) {
    const icon = document.querySelector('link[rel="icon"]') as unknown as HTMLHyperlinkElementUtils;
    window.originalFavicon = icon.href;
  }

  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;

  const context = canvas.getContext('2d') as CanvasRenderingContext2D;
  const img = document.createElement('img');
  const icon = document.querySelector('link[rel="icon"]') as unknown as HTMLHyperlinkElementUtils;
  img.src = window.originalFavicon;

  img.onload = () => {
    context.drawImage(img, 0, 0, 16, 16);

    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(
      emojiList[(emojiList.length * Math.random()) | 0],
      canvas.width / 2 - 0.125,
      canvas.height / 2 + 1.25
    );

    icon.href = canvas.toDataURL('image/png');
  };
};
