import React, { Component } from 'react'

import '../assets/styles/Welcome.scss'

class Welcome extends Component {
  render() {
    return (
      <section id="welcome">
        <h1>Typical IT</h1>
        <h2>Some code</h2>
        <h4>Bit design</h4>
        <h6>Pinch hw</h6>
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
        <div className="shit-happens">Don't like this site?<small>It's a pity, but I kept the old versions <a href="/old2" target="_blank">here</a> and <a href="/old" target="_blank">here</a>. Do not be scared!</small></div>
        <a id="welcome-scroll"></a>
      </section>
    )
  }
}

export default Welcome