import React from 'react'
import PortfolioItem from './PortfolioItem'

import '../assets/styles/Portfolio.scss'

const Portfolio = ({ ms }) => {
  /** DATA */
  const discordBotsList = [
    {
      link: 'https://discord.com/api/oauth2/authorize?client_id=517238171969257476&permissions=8&scope=bot%20applications.commands',
      title: ms.key === 'ru' ? 'Мафон бати' : 'Daddys Player',
      description: ms.key === 'ru' ? 'Музыкальный бот с фичами рэйпа' : 'Music bot with rape features',
      status: 'on'
    },
    {
      link: 'https://discordapp.com/api/oauth2/authorize?client_id=680698134338207754&permissions=0&scope=bot',
      title: ms.key === 'ru' ? 'Приватный комнатник' : 'Private Roomer',
      description: ms.key === 'ru' ? 'Бот который создает приватные комнаты' : 'Bot that creates private rooms',
      status: 'on'
    },
    {
      title: ms.key === 'ru' ? 'Личный нибба' : 'Personal Nibba',
      description: ms.key === 'ru' ? 'Работяга который прикалывается' : 'The hard worker who makes fun',
      status: 'private'
    },
    {
      title: ms.key === 'ru' ? 'Шутник и шут' : 'Joker and Jester',
      description: ms.key === 'ru' ? 'Пишет самые тупые шутки' : 'Writes the dumbest jokes in the world',
      status: 'off'
    },
    {
      title: ms.key === 'ru' ? 'Повелитель онлайна' : 'Online Master',
      description: ms.key === 'ru' ? 'Счетчик онлайна для RUST проектов' : 'Online counter for RUST projects',
      status: 'off'
    },
    {
      title: ms.key === 'ru' ? 'Всеотец CRMP' : 'Allfather of CRMP',
      description: ms.key === 'ru' ? 'Предводитель и контролер семьи в CRMP' : 'Family leader and controller in CRMP',
      status: 'off'
    }
  ];
  const uxuiData = [
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
    }
  ];
  const donationAlertsData = [
    {
      link: 'https://ch3rn1k.me/donation?key=sOmEwEiRdKeYfOrDA123&pattern=wheel&min=10',
      title: ms.key === 'ru' ? 'Всратое колесо фортуны' : 'Shitty the wheel of fortune',
      description: ms.key === 'ru' ? 'Когда то делалось для "стримера", но он умер' : 'Once it was done for the "streamer", but he died'
    }
  ];
  const vkData = [
    {
      title: ms.key === 'ru' ? 'Таблица онлайна' : 'Online table',
      description: ms.key === 'ru' ? 'Счетчик онлайна на WS для RUST проектов' : 'Online counter on WS for RUST projects',
      status: 'private'
    }
  ];
  const apiData = [
    {
      title: ms.key === 'ru' ? 'RUST JSON СЕРВЕРЫ' : 'RUST JSON SERVERS',
      description: ms.key === 'ru' ? 'Данные по онлайну серверов в RUST в JSON формате' : 'Data of servers online in RUST in JSON format',
      status: 'private'
    }
  ];
  const homebridgeData = [
    {
      link: 'https://github.com/ch3rn1k/homebridge-multipurpose-kettle',
      title: 'Xiaomi Multipurpose Kettle',
      description: ms.key === 'ru' ? 'Плагин для супер-пупер умного чайника (умнее меня, 146%)' : 'Plugin for super duper smart kettle (smarter than me, 146%)'
    }
  ];

  /** TEMPLATES */
  return (
    <section id="portfolio">
      <h1>{ms.portfolio.title}</h1>
      <div className="portfolio-container">
        <div className="portfolio-container--title">Discord</div>
        <div className="portfolio-container--items">
          {discordBotsList.map((value, index) => (
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
        <div className="portfolio-container--title">WEB</div>
        <div className="portfolio-container--items">
          {uxuiData.map((value, index) => (
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
        <div className="portfolio-container--title">Donation Alerts</div>
        <div className="portfolio-container--items">
          {donationAlertsData.map((value, index) => (
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
        <div className="portfolio-container--title">VK</div>
        <div className="portfolio-container--items">
          {vkData.map((value, index) => (
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
        <div className="portfolio-container--title">API</div>
        <div className="portfolio-container--items">
          {apiData.map((value, index) => (
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
        <div className="my-contacts--title">{ms.portfolio.thatsMe}</div>
        <div className="my-contacts--links">
          <a href="https://vk.com/ch3rn1k" target="_blank">VK</a>
          <a href="https://t.me/ch3rn1k" target="_blank">TELEGRAM</a>
          <a href="https://www.instagram.com/ch3rn1k/" target="_blank">INSTAGRAM</a>
          <a href="https://discord.gg/2qk9B6u" target="_blank">DISCORD</a>
          <a href="https://steamcommunity.com/id/ch3rn1k/" target="_blank">STEAM</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;