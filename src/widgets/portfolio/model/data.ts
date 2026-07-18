import type { Locale } from '@/shared/lib/i18n';
import type { PortfolioEntry } from '@/shared/model/portfolio';

type Lang = Locale;

const t = (lang: Lang, ru: string, en: string) => (lang === 'ru' ? ru : en);

export const getPortfolioData = (
  lang: Lang
): Record<'discord' | 'telegram' | 'desktop' | 'mobile' | 'web' | 'others', PortfolioEntry[]> => ({
  discord: [
    {
      link: 'https://discord.com/api/oauth2/authorize?client_id=1043512059108798484&permissions=8&scope=bot%20applications.commands',
      title: t(lang, 'Маджестик парсер', 'Majestic Parser'),
      description: t(lang, 'Бот для оповещениями о новых ЖБ', 'Bot for receiving notifications from forum'),
      status: 'off'
    },
    {
      title: 'Armavir Bot',
      description: t(lang, 'Ботярикс с кучей функционала для фанаток', 'Bot with a lot of functions for fanboys'),
      status: 'private'
    },
    {
      link: 'https://discord.com/api/oauth2/authorize?client_id=517238171969257476&permissions=8&scope=bot%20applications.commands',
      title: t(lang, 'Мафон бати', "Daddy's Player"),
      description: t(lang, 'Музыкальный бот с фичами рэйпа', 'Music bot with rape features'),
      status: 'off'
    },
    {
      link: 'https://discordapp.com/api/oauth2/authorize?client_id=680698134338207754&permissions=0&scope=bot',
      title: t(lang, 'Приватный комнатник', 'Private Roomer'),
      description: t(lang, 'Бот который создает приватные комнаты', 'Bot that creates private rooms'),
      status: 'off'
    },
    {
      title: t(lang, 'Личный нибба', 'Personal Nibba'),
      description: t(lang, 'Работяга который прикалывается', 'The hard worker who makes fun'),
      status: 'off'
    },
    {
      title: t(lang, 'Шутник и шут', 'Joker and Jester'),
      description: t(lang, 'Пишет самые тупые шутки', 'Writes the dumbest jokes in the world'),
      status: 'off'
    },
    {
      title: t(lang, 'Повелитель онлайна', 'Online Master'),
      description: t(lang, 'Счетчик онлайна для RUST проектов', 'Online counter for RUST projects'),
      status: 'off'
    },
    {
      title: t(lang, 'Всеотец CRMP', 'Allfather of CRMP'),
      description: t(lang, 'Предводитель и контролер семьи в CRMP', 'Family leader and controller in CRMP'),
      status: 'off'
    }
  ] satisfies PortfolioEntry[],
  telegram: [
    {
      link: 'https://t.me/majesticforumbot',
      title: t(lang, 'Маджестик парсер', 'Majestic Parser'),
      description: t(lang, 'Бот для оповещениями о новых ЖБ', 'Bot for receiving notifications from forum'),
      status: 'on'
    },
    {
      title: 'Armavir Bot Telegram',
      description: t(lang, 'Парсер постов для отправки в DS', 'Posts parser to send them next to Discord'),
      status: 'private'
    },
    {
      title: 'Giveway Bot',
      description: t(lang, 'Бот с web_app интерфейсом для конкурсов', 'Bot with web_app interface for contests'),
      status: 'private'
    }
  ] satisfies PortfolioEntry[],
  desktop: [
    {
      link: 'https://binderbot.ru/download?s=website',
      title: 'BinderBot',
      description: t(lang, 'Лучший биндер для роле-плау игр', 'Best binder for role-play gaming')
    }
  ] satisfies PortfolioEntry[],
  mobile: [
    {
      link: 'https://apps.apple.com/ru/app/id1658493916',
      title: 'LANDLORD',
      description: 'iOS · React Native'
    },
    {
      link: 'https://apps.rustore.ru/app/com.landlordmobileapp',
      title: 'LANDLORD',
      description: 'Android · React Native'
    }
  ] satisfies PortfolioEntry[],
  web: [
    {
      link: 'https://landlord.ru',
      title: 'LANDLORD',
      description: 'Full Stack · NextJS + React JS'
    },
    {
      link: 'https://pro.landlord.ru',
      title: 'LANDLORD PRO',
      description: 'Full Stack · Vanilla JS + Microservices JS'
    },
    {
      link: 'https://ch3rn1k.me',
      title: 'ch3rn1k',
      description: 'Frontend · React'
    },
    {
      link: 'https://katypa.me',
      title: 'katypa',
      description: 'Frontend · React'
    },
    {
      link: 'https://wiki.majestic-rp.ru',
      title: 'Majestic Wiki',
      description: 'Full Stack · React TS'
    },
    {
      link: 'https://majesticmcl.ru/',
      title: 'Majestic Rating',
      description: t(lang, 'Статистика семейных каптов и MCL · Full Stack', 'Family capt & MCL stats · Full Stack')
    },
    {
      link: 'https://alcor.app',
      title: 'ALCOR',
      description: 'Full Stack · React TS'
    },
    {
      link: 'https://rustroom.gg',
      title: 'Rust Room',
      description: 'Full Stack · React TS'
    },
    {
      title: t(lang, 'Колесо фортуны', 'Wheel of fortune'),
      description: 'Vanilla JS'
    },
    {
      title: 'Majestic Web Scrapper',
      description: 'Back End · Playwright + TS'
    }
  ] satisfies PortfolioEntry[],
  others: [
    {
      link: 'https://github.com/ch3rn1k/homebridge-multipurpose-kettle',
      title: 'Xiaomi Multipurpose Kettle',
      description: t(
        lang,
        'Плагин для супер-пупер умного чайника (умнее меня, 146%)',
        'Plugin for super duper smart kettle (smarter than me, 146%)'
      )
    },
    {
      title: 'BaseBuilding Kolhoz',
      description: t(
        lang,
        'Мод для DayZ сервера для контроля стройки',
        'Mod for the DayZ server to control construction'
      ),
      status: 'private'
    },
    {
      title: 'BodiesControl Kolhoz',
      description: t(lang, 'Мод для DayZ сервера для удаления трупиков', 'Mod for DayZ server to remove corpses'),
      status: 'private'
    },
    {
      title: 'BinderBot API',
      description: t(lang, 'API магазина для BinderBot', 'API for shop inside BinderBot')
    }
  ] satisfies PortfolioEntry[]
});
