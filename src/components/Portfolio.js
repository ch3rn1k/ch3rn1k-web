import React, { useRef } from 'react';
import PortfolioItem from './PortfolioItem';
import '../assets/styles/Portfolio.scss';

const Portfolio = ({ l10n }) => {
  const discordBotsData = useRef([
    {
      link: 'https://discord.com/api/oauth2/authorize?client_id=1043512059108798484&permissions=8&scope=bot%20applications.commands',
      title: l10n.key === 'ru' ? 'Маджестик парсер' : 'Majestic Parser',
      description: l10n.key === 'ru' ? 'Бот с оповещениями о новых ЖБ' : 'Bot with notifications about new warns from forum',
      status: 'on'
    },
    {
      title: 'Armavir Bot',
      description: l10n.key === 'ru' ? 'Ботярикс с кучей функционала' : 'Bot with a lot of functions',
      status: 'off'
    },
    {
      link: 'https://discord.com/api/oauth2/authorize?client_id=517238171969257476&permissions=8&scope=bot%20applications.commands',
      title: l10n.key === 'ru' ? 'Мафон бати' : 'Daddys Player',
      description: l10n.key === 'ru' ? 'Музыкальный бот с фичами рэйпа' : 'Music bot with rape features',
      status: 'off'
    },
    {
      link: 'https://discordapp.com/api/oauth2/authorize?client_id=680698134338207754&permissions=0&scope=bot',
      title: l10n.key === 'ru' ? 'Приватный комнатник' : 'Private Roomer',
      description: l10n.key === 'ru' ? 'Бот который создает приватные комнаты' : 'Bot that creates private rooms',
      status: 'off'
    },
    {
      title: l10n.key === 'ru' ? 'Личный нибба' : 'Personal Nibba',
      description: l10n.key === 'ru' ? 'Работяга который прикалывается' : 'The hard worker who makes fun',
      status: 'off'
    },
    {
      title: l10n.key === 'ru' ? 'Шутник и шут' : 'Joker and Jester',
      description: l10n.key === 'ru' ? 'Пишет самые тупые шутки' : 'Writes the dumbest jokes in the world',
      status: 'off'
    },
    {
      title: l10n.key === 'ru' ? 'Повелитель онлайна' : 'Online Master',
      description: l10n.key === 'ru' ? 'Счетчик онлайна для RUST проектов' : 'Online counter for RUST projects',
      status: 'off'
    },
    {
      title: l10n.key === 'ru' ? 'Всеотец CRMP' : 'Allfather of CRMP',
      description: l10n.key === 'ru' ? 'Предводитель и контролер семьи в CRMP' : 'Family leader and controller in CRMP',
      status: 'off'
    }
  ]).current;
  const webData = useRef([
    {
      link: 'https://landlord.ru',
      title: 'LANDLORD',
      description: 'Fullstack . NextJS + React'
    },
    {
      link: 'https://pro.landlord.ru',
      title: 'LANDLORD PRO',
      description: 'Fullstack . Vanilla + Microservices'
    },
    {
      link: 'https://ch3rn1k.me',
      title: 'ch3rn1k',
      description: 'Frontend . React'
    },
    {
      link: 'https://katypa.me',
      title: 'katypa',
      description: 'Frontend . React'
    },
    {
      link: 'https://ch3rn1k.me/donation?key=sOmEwEiRdKeYfOrDA123&pattern=wheel&min=10',
      title: l10n.key === 'ru' ? 'Всратое колесо фортуны' : 'Shitty the wheel of fortune',
      description: l10n.key === 'ru' ? 'Колесо фортуны при донатиках' : 'Wheel of Fortune on donuts'
    },
    {
      title: 'Majestic Web Scrapper',
      description: l10n.key === 'ru' ? 'Паук который вечно парсит темы на форуме' : 'A crawler that always parses forum threads'
    }
  ]).current;
  const telegramData = useRef([
    {
      link: 'https://t.me/majesticforumbot',
      title: l10n.key === 'ru' ? 'Маджестик парсер' : 'Majestic Parser',
      description: l10n.key === 'ru' ? 'Бот с оповещениями о новых ЖБ' : 'Bot with notifications about new warns from forum',
      status: 'on'
    },
    {
      title: 'Armavir Bot Telegram',
      description: l10n.key === 'ru' ? 'Парсер постов для отправки в DS' : 'Posts parser to send them next to Discord',
      status: 'private'
    },
    {
      title: 'Giveway Bot',
      description: l10n.key === 'ru' ? 'Бот с web_app интерфейсом для конкурсов' : 'Bot with web_app interface for contests',
      status: 'private'
    }
  ]).current;
  const mobileData = useRef([
    {
      link: 'https://apps.apple.com/ru/app/id1658493916',
      title: 'LANDLORD',
      description: 'iOS . React Native'
    },
    {
      link: 'https://apps.rustore.ru/app/com.landlordmobileapp',
      title: 'LANDLORD',
      description: 'Android . React Native'
    }
  ]).current;
  const desktopData = useRef([
    {
      link: 'https://ch3rn1k.me/archive/binderBot/BinderBotSetup.exe',
      title: 'BinderBot',
      description: l10n.key === 'ru' ? 'Лучший биндер для гташки 5' : 'Best binder for GTA5'
    },
    {
      link: 'https://ch3rn1k.me/archive/index.php?b=binderBot%2Fprofiles',
      title: l10n.key === 'ru' ? 'BinderBot профили' : 'BinderBot Profiles',
      description: l10n.key === 'ru' ? 'Готовые профили для лучшего биндера' : 'Ready profiles for best binder'
    }
  ]).current;
  const homebridgeData = useRef([
    {
      link: 'https://github.com/ch3rn1k/homebridge-multipurpose-kettle',
      title: 'Xiaomi Multipurpose Kettle',
      description: l10n.key === 'ru' ? 'Плагин для супер-пупер умного чайника (умнее меня, 146%)' : 'Plugin for super duper smart kettle (smarter than me, 146%)'
    }
  ]).current;

  return (
    <section id="portfolio">
      <h1>{l10n.portfolio.title}</h1>
      <div className="portfolio-container">
        <div className="portfolio-container--title">Discord</div>
        <div className="portfolio-container--items">
          {discordBotsData.map((value, index) => (
            <PortfolioItem
              key={index}
              link={value.link}
              title={value.title}
              description={value.description}
              status={value.status}
            />
          ))}
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-container--title">Telegram</div>
        <div className="portfolio-container--items">
          {telegramData.map((value, index) => (
            <PortfolioItem
              key={index}
              link={value.link}
              title={value.title}
              description={value.description}
              status={value.status}
            />
          ))}
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-container--title">DESKTOP</div>
        <div className="portfolio-container--items">
          {desktopData.map((value, index) => (
            <PortfolioItem
              key={index}
              link={value.link}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-container--title">MOBILE</div>
        <div className="portfolio-container--items">
          {mobileData.map((value, index) => (
            <PortfolioItem
              key={index}
              link={value.link}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-container--title">WEB</div>
        <div className="portfolio-container--items">
          {webData.map((value, index) => (
            <PortfolioItem
              key={index}
              link={value.link}
              title={value.title}
              description={value.description}
              status={value.status}
            />
          ))}
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-container--title">Homebridge</div>
        <div className="portfolio-container--items">
          {homebridgeData.map((value, index) => (
            <PortfolioItem
              key={index}
              link={value.link}
              title={value.title}
              description={value.description}
              status={value.status}
            />
          ))}
        </div>
      </div>
      <div className="my-contacts">
        <div className="my-contacts--title">{l10n.portfolio.thatsMe}</div>
        <div className="my-contacts--links">
          <a href="https://vk.com/ch3rn1k" target="_blank">VK</a>
          <a href="https://t.me/ch3rn1k" target="_blank">TELEGRAM</a>
          <a href="https://steamcommunity.com/id/ch3rn1k" target="_blank">STEAM</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;