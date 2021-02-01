import React, { Component } from 'react'

import '../assets/styles/Portfolio.scss'

class Portfolio extends Component {
  render() {
    return(
      <section id="portfolio">
        <h1>{this.props.language === 'ru' ? 'Портфолио' : 'Portfolio'}</h1>
        <div className="portfolio-container">
          <div className="portfolio-container--title">Discord</div>
          <div className="portfolio-container--items">
            <a href="https://discordapp.com/api/oauth2/authorize?client_id=517238171969257476&permissions=0&scope=bot" target="_blank" className="portfolio-container--item on" tabIndex="0">
              {this.props.language === 'ru' ? 'Мафон бати' : 'Daddys Player'}
              <span>{this.props.language === 'ru' ? 'Музыкальный бот с фичами рэйпа' : 'Music bot with rape features'}</span>
            </a>
            <a href="https://discordapp.com/api/oauth2/authorize?client_id=680698134338207754&permissions=0&scope=bot" target="_blank" className="portfolio-container--item on" tabIndex="0">
              {this.props.language === 'ru' ? 'Приватный комнатник' : 'Private Roomer'}
              <span>{this.props.language === 'ru' ? 'Бот который создает приватные комнаты' : 'Bot that creates private rooms'}</span>
            </a>
            <a target="_blank" className="portfolio-container--item off" tabIndex="0">
              {this.props.language === 'ru' ? 'Шутник и шут' : 'Joker and Jester'}
              <span>{this.props.language === 'ru' ? 'Пишет самые тупые шутки' : 'Writes the dumbest jokes in the world'}</span>
            </a>
            <a className="portfolio-container--item off" tabIndex="0">
              {this.props.language === 'ru' ? 'Повелитель онлайна' : 'Online Master'}
              <span>{this.props.language === 'ru' ? 'Счетчик онлайна для RUST проектов' : 'Online counter for RUST projects'}</span>
            </a>
            <a className="portfolio-container--item private" tabIndex="0">
              {this.props.language === 'ru' ? 'Личный нибба' : 'Personal Nibba'}
              <span>{this.props.language === 'ru' ? 'Работяга который прикалывается' : 'The hard worker who makes fun'}</span>
            </a>
            <a className="portfolio-container--item private" tabIndex="0">
              {this.props.language === 'ru' ? 'Всеотец CRMP' : 'Allfather of CRMP'}
              <span>{this.props.language === 'ru' ? 'Предводитель и контролер семьи в CRMP' : 'Family leader and controller in CRMP'}</span>
            </a>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-container--title">Donation Alerts</div>
          <div className="portfolio-container--items">
            <a href="https://ch3rn1k.me/donation?key=sOmEwEiRdKeYfOrDA123&pattern=wheel&min=10" target="_blank" className="portfolio-container--item" tabIndex="0">
              {this.props.language === 'ru' ? 'Всратое колесо фортуны' : 'Shitty the wheel of fortune'}
              <span>{this.props.language === 'ru' ? 'Когда то делалось для "стримера", но он умер' : 'Once it was done for the "streamer", but he died'}</span>
            </a>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-container--title">VK</div>
          <div className="portfolio-container--items">
            <a className="portfolio-container--item" tabIndex="0">
              {this.props.language === 'ru' ? 'Таблица онлайна' : 'Online table'}
              <span>{this.props.language === 'ru' ? 'Счетчик онлайна на WS для RUST проектов' : 'Online counter on WS for RUST projects'}</span>
            </a>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-container--title">API</div>
          <div className="portfolio-container--items">
            <a href="http://api.ch3rn1k.me/rust/servers" className="portfolio-container--item" tabIndex="0">
              RUST JSON online
              <span>{this.props.language === 'ru' ? 'Данные по онлайну серверов в RUST' : 'Server online data in RUST'}</span>
            </a>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-container--title">Homebridge</div>
          <div className="portfolio-container--items">
            <a href="https://github.com/ch3rn1k/homebridge-multipurpose-kettle" className="portfolio-container--item" tabIndex="0">
              Xiaomi Multipurpose Kettle
              <span>{this.props.language === 'ru' ? 'Плагин для супер-пупер умного чайника (умнее меня, 146%)' : 'Plugin for super duper smart kettle (smarter than me, 146%)'}</span>
            </a>
          </div>
        </div>
        <div className="my-contacts">
          <div className="my-contacts--title">{this.props.language === 'ru' ? 'Собственно говоря, вот и я:' : 'As a matter of fact, here I am:'}</div>
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