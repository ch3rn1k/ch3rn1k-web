import React, { Component } from 'react'

import '../assets/styles/Portfolio.scss'

class Portfolio extends Component {
  render() {
    return(
      <section id="portfolio">
        <h1>Портфолио</h1>
        <div className="portfolio-container">
          <div className="portfolio-container--title">Discord</div>
          <div className="portfolio-container--items">
            <a href="https://discordapp.com/api/oauth2/authorize?client_id=517238171969257476&permissions=0&scope=bot" target="_blank" className="portfolio-container--item on" tabIndex="0">
              Мафон бати
              <span>Музыкальный бот с фичами рэйпа</span>
            </a>
            <a href="https://discordapp.com/api/oauth2/authorize?client_id=680698134338207754&permissions=0&scope=bot" target="_blank" className="portfolio-container--item on" tabIndex="0">
              Приватный комнатник
              <span>Бот который создает приватные комнаты</span>
            </a>
            <a target="_blank" className="portfolio-container--item off" tabIndex="0">
              Шутник и шут
              <span>Пишет самые тупые шутки</span>
            </a>
            <a className="portfolio-container--item off" tabIndex="0">
              Повелитель онлайна
              <span>Счетчик онлайна для RUST проектов</span>
            </a>
            <a className="portfolio-container--item private" tabIndex="0">
              Личный нибба
              <span>Работяга который прикалывается</span>
            </a>
            <a className="portfolio-container--item private" tabIndex="0">
              Всеотец CRMP
              <span>Предводитель и контролер семьи в CRMP</span>
            </a>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-container--title">Donation Alerts</div>
          <div className="portfolio-container--items">
            <a href="https://ch3rn1k.me/donation?key=sOmEwEiRdKeYfOrDA123&pattern=wheel&min=10" target="_blank" className="portfolio-container--item" tabIndex="0">
              Всратое колесо фортуны
              <span>Когда то делалось для "стримера", но он умер</span>
            </a>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-container--title">VK</div>
          <div className="portfolio-container--items">
            <a className="portfolio-container--item" tabIndex="0">
              Таблица онлайна
              <span>Счетчик онлайна на WS для RUST проектов</span>
            </a>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-container--title">API</div>
          <div className="portfolio-container--items">
            <a href="http://api.ch3rn1k.me/rust/servers" className="portfolio-container--item" tabIndex="0">
              RUST JSON online
              <span>Данные по онлайну серверов в RUST</span>
            </a>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-container--title">Homebridge</div>
          <div className="portfolio-container--items">
            <a href="https://github.com/ch3rn1k/homebridge-multipurpose-kettle" className="portfolio-container--item" tabIndex="0">
              Xiaomi Multipurpose Kettle
              <span>Плагин для супер-пупер умного чайника (умнее меня, 146%)</span>
            </a>
          </div>
        </div>
        <div className="my-contacts">
          <div className="my-contacts--title">Собственно говоря, вот и я:</div>
          <div className="my-contacts--links">
            <a href="https://vk.com/ch3rn1k" target="_blank">VK</a>
            <a href="https://t.me/ch3rn1k" target="_blank">TELEGRAM</a>
            <a href="https://www.instagram.com/ch3rn1k/" target="_blank">INSTAGRAM</a>
            <a href="https://discord.gg/2qk9B6u" target="_blank">DISCORD</a>
            <a href="https://steamcommunity.com/id/ch3rn1k/" target="_blank">STEAM</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio