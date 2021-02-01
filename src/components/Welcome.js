import React, { Component } from 'react'

import '../assets/styles/Welcome.scss'

class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  handleClickScrollDown = () => {
    let el = document.getElementById('portfolio');

    el.scrollIntoView({ block: 'start', behavior: 'smooth' }); 
  }

  render() {
    let ru = (<section id="welcome">
                <h1>Типичный IT</h1>
                <h2>Много кода</h2>
                <h4>Немного дизайна</h4>
                <h6>Щепотка железа</h6>
                <div className="welcome-dialog">
                  <h5>Привет, %username%!</h5>
                  <div className="welcome-dialog--item">
                    <div>Меня зовут ch3rn1k и я Fullstack JS.</div>
                    <div><small>Да да, NodeJS, MERN и все в этом духе!</small></div>
                    <div><small>Слегка потрогал C# и C++, но остался жив и вернулся в WEB. :D</small></div>
                  </div>
                  <div className="welcome-dialog--item">Создаю удобные интерфейсы в сложных приложениях - UX/UI.</div>
                  <div className="welcome-dialog--item">Ну и конечно же крафт "железа", с кастомными водянками, ням.</div>
                </div>
                <div className="shit-happens">
                  Не нравится этот сайт? 
                  <small>А жаль, но я сохранил старые версии <a href="/old" target="_blank">тут</a> и <a href="/superold" target="_blank">тут</a>. Только не пугайся!</small>
                </div>
                <a onClick={this.handleClickScrollDown} id="welcome-scroll"></a>
              </section>);

    let en = (<section id="welcome">
                <h1>Typical IT</h1>
                <h2>Some code</h2>
                <h4>Bit design</h4>
                <h6>Pinch hw</h6>
                <div className="welcome-dialog">
                  <h5>Hello, %username%!</h5>
                  <div className="welcome-dialog--item">
                    <div>My name is ch3rn1k and I am Fullstack JS.</div>
                    <div><small>Yeah, NodeJS, MERN and all of this stuff!</small></div>
                    <div><small>Just touched C# и C++, but survived and returned to the WEB. :D</small></div>
                  </div>
                  <div className="welcome-dialog--item">Creating user-friendly interfaces in complex applications - UX/UI.</div>
                  <div className="welcome-dialog--item">And of course, custom PC's, with water coolings, yum.</div>
                </div>
                <div className="shit-happens">
                  Don't like this site?
                  <small>It's a pity, but I kept the old versions <a href="/old" target="_blank">here</a> and <a href="/superold" target="_blank">here</a>. Do not be scared!</small>
                </div>
                <a onClick={this.handleClickScrollDown} id="welcome-scroll"></a>
              </section>);

    return this.props.language === 'ru' ? ru : en;
  }
}

export default Welcome