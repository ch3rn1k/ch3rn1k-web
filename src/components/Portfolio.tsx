import styled from 'styled-components';
import { useRef } from 'react';
import { PortfolioItem } from '@/components/PortfolioItem';
import { getTranslation } from '@/ts/Util';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  padding: var(--padding-section);
  overflow: hidden;
  background-color: var(--color-main);
  color: var(--color-sub);

  ::selection {
    color: var(--color-main);
    background-color: var(--color-sub);
  }
`;
const ContainerLinks = styled.div`
  display: flex;

  a {
    font-size: 16px;
    color: #ee2e2e;
    text-underline-offset: -16px;
    text-decoration-thickness: 2px;
    margin-right: 8px;
  }
`;
const ContainerContacts = styled.div`
  margin-top: auto;
  padding-top: 80px;
`;
const ContainerContactsItem = styled.a`
  display: block;
  white-space: nowrap;
  overflow: auto;
`;

const Block = styled.div`
  margin-bottom: 24px;
`;
const BlockItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Portfolio = () => {
  const translation = getTranslation();
  const discordBotsData = useRef([
    {
      link: 'https://discord.com/api/oauth2/authorize?client_id=1043512059108798484&permissions=8&scope=bot%20applications.commands',
      title: translation.key === 'ru' ? 'Маджестик парсер' : 'Majestic Parser',
      description:
        translation.key === 'ru' ? 'Бот для оповещениями о новых ЖБ' : 'Bot for recieving notifications from forum',
      status: 'on'
    },
    {
      title: 'Armavir Bot',
      description:
        translation.key === 'ru'
          ? 'Ботярикс с кучей функционала для фанаток'
          : 'Bot with a lot of functions for fanboys',
      status: 'private'
    },
    {
      link: 'https://discord.com/api/oauth2/authorize?client_id=517238171969257476&permissions=8&scope=bot%20applications.commands',
      title: translation.key === 'ru' ? 'Мафон бати' : 'Daddys Player',
      description: translation.key === 'ru' ? 'Музыкальный бот с фичами рэйпа' : 'Music bot with rape features',
      status: 'off'
    },
    {
      link: 'https://discordapp.com/api/oauth2/authorize?client_id=680698134338207754&permissions=0&scope=bot',
      title: translation.key === 'ru' ? 'Приватный комнатник' : 'Private Roomer',
      description:
        translation.key === 'ru' ? 'Бот который создает приватные комнаты' : 'Bot that creates private rooms',
      status: 'off'
    },
    {
      title: translation.key === 'ru' ? 'Личный нибба' : 'Personal Nibba',
      description: translation.key === 'ru' ? 'Работяга который прикалывается' : 'The hard worker who makes fun',
      status: 'off'
    },
    {
      title: translation.key === 'ru' ? 'Шутник и шут' : 'Joker and Jester',
      description: translation.key === 'ru' ? 'Пишет самые тупые шутки' : 'Writes the dumbest jokes in the world',
      status: 'off'
    },
    {
      title: translation.key === 'ru' ? 'Повелитель онлайна' : 'Online Master',
      description: translation.key === 'ru' ? 'Счетчик онлайна для RUST проектов' : 'Online counter for RUST projects',
      status: 'off'
    },
    {
      title: translation.key === 'ru' ? 'Всеотец CRMP' : 'Allfather of CRMP',
      description:
        translation.key === 'ru' ? 'Предводитель и контролер семьи в CRMP' : 'Family leader and controller in CRMP',
      status: 'off'
    }
  ]).current;
  const webData = useRef([
    {
      link: 'https://landlord.ru',
      title: 'LANDLORD',
      description: 'Full Stack . NextJS + React JS'
    },
    {
      link: 'https://pro.landlord.ru',
      title: 'LANDLORD PRO',
      description: 'Full Stack . Vanilla JS + Microservices JS'
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
      link: 'https://wiki.majestic-rp.ru',
      title: 'Majestic Wiki',
      description: 'Full Stack . React TS'
    },
    {
      link: 'https://alcor.app',
      title: 'ALCOR',
      description: 'Full Stack . React TS'
    },
    {
      link: 'https://rustroom.gg',
      title: 'Rust Room',
      description: 'Full Stack . React TS'
    },
    {
      title: translation.key === 'ru' ? 'Колесо фортуны' : 'Wheel of fortune',
      description: 'Vanilla JS'
    },
    {
      title: 'Majestic Web Scrapper',
      description: 'Back End . Playwright + TS'
    }
  ]).current;
  const telegramData = useRef([
    {
      link: 'https://t.me/majesticforumbot',
      title: translation.key === 'ru' ? 'Маджестик парсер' : 'Majestic Parser',
      description:
        translation.key === 'ru' ? 'Бот для оповещениями о новых ЖБ' : 'Bot for recieving notifications from forum',
      status: 'on'
    },
    {
      title: 'Armavir Bot Telegram',
      description:
        translation.key === 'ru' ? 'Парсер постов для отправки в DS' : 'Posts parser to send them next to Discord',
      status: 'private'
    },
    {
      title: 'Giveway Bot',
      description:
        translation.key === 'ru'
          ? 'Бот с web_app интерфейсом для конкурсов'
          : 'Bot with web_app interface for contests',
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
      link: 'https://binderbot.ru/download?s=website',
      title: 'BinderBot',
      description: translation.key === 'ru' ? 'Лучший биндер для роле-плау игр' : 'Best binder for role-play gaming'
    }
  ]).current;
  const othersData = useRef([
    {
      link: 'https://github.com/ch3rn1k/homebridge-multipurpose-kettle',
      title: 'Xiaomi Multipurpose Kettle',
      description:
        translation.key === 'ru'
          ? 'Плагин для супер-пупер умного чайника (умнее меня, 146%)'
          : 'Plugin for super duper smart kettle (smarter than me, 146%)'
    },
    {
      title: 'BaseBuilding Kolhoz',
      description:
        translation.key === 'ru'
          ? 'Мод для DayZ сервера для контроля стройки'
          : 'Mod for the DayZ server to control construction',
      status: 'private'
    },
    {
      title: 'BodiesControl Kolhoz',
      description:
        translation.key === 'ru'
          ? 'Мод для DayZ сервера для удаления трупиков'
          : 'Mod for DayZ server to remove corpses',
      status: 'private'
    },
    {
      title: 'BinderBot API',
      description: translation.key === 'ru' ? 'API магазина для BinderBot' : 'API for shop inside BinderBot'
    }
  ]).current;

  return (
    <Container>
      <h2>{translation.portfolio.title}</h2>
      <Block>
        <h5>Discord</h5>
        <BlockItem>
          {discordBotsData.map((value, index) => (
            <PortfolioItem
              key={index}
              link={value.link}
              title={value.title}
              description={value.description}
              status={value.status}
            />
          ))}
        </BlockItem>
      </Block>
      <Block>
        <h5>Telegram</h5>
        <BlockItem>
          {telegramData.map((value, index) => (
            <PortfolioItem
              key={index}
              link={value.link}
              title={value.title}
              description={value.description}
              status={value.status}
            />
          ))}
        </BlockItem>
      </Block>
      <Block>
        <h5>DESKTOP</h5>
        <BlockItem>
          {desktopData.map((value, index) => (
            <PortfolioItem key={index} link={value.link} title={value.title} description={value.description} />
          ))}
        </BlockItem>
      </Block>
      <Block>
        <h5>MOBILE</h5>
        <BlockItem>
          {mobileData.map((value, index) => (
            <PortfolioItem key={index} link={value.link} title={value.title} description={value.description} />
          ))}
        </BlockItem>
      </Block>
      <Block>
        <h5>WEB</h5>
        <BlockItem>
          {webData.map((value, index) => (
            <PortfolioItem key={index} link={value.link} title={value.title} description={value.description} />
          ))}
        </BlockItem>
      </Block>
      <Block>
        <h5>Others</h5>
        <BlockItem>
          {othersData.map((value, index) => (
            <PortfolioItem key={index} title={value.title} description={value.description} status={value.status} />
          ))}
        </BlockItem>
      </Block>
      <ContainerContacts>
        <div>{translation.portfolio.thatsMe}</div>
        <ContainerLinks>
          <ContainerContactsItem href="https://vk.com/ch3rn1k" target="_blank" rel="noreferrer">
            VK
          </ContainerContactsItem>
          <ContainerContactsItem href="https://t.me/ch3rn1k" target="_blank" rel="noreferrer">
            TELEGRAM
          </ContainerContactsItem>
          <ContainerContactsItem href="https://steamcommunity.com/id/ch3rn1k" target="_blank" rel="noreferrer">
            STEAM
          </ContainerContactsItem>
        </ContainerLinks>
      </ContainerContacts>
    </Container>
  );
};
