import { motion } from 'framer-motion'
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
                <motion.h1 initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>Типичный IT</motion.h1>
                <motion.h2 transition={{ delay: 0.25 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>Много кода</motion.h2>
                <motion.h4 transition={{ delay: 0.5 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>Немного дизайна</motion.h4>
                <motion.h6 transition={{ delay: 0.75 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>Щепотка железа</motion.h6>
                <motion.div transition={{ delay: 1.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="welcome-dialog">
                  <h5>Привет, %username%!</h5>
                  <div className="welcome-dialog--item">
                    <div>Меня зовут ch3rn1k и я Fullstack JS.</div>
                    <div><small>Да да, NodeJS, MERN и все в этом духе!</small></div>
                    <div><small>Слегка потрогал C# и C++, но остался жив и вернулся в WEB. :D</small></div>
                  </div>
                  <div className="welcome-dialog--item">Создаю удобные интерфейсы в сложных приложениях - UX/UI.</div>
                  <div className="welcome-dialog--item">Ну и конечно же крафт "железа", с кастомными водянками, ням.</div>
                </motion.div>
                <motion.div transition={{ delay: 2.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="shit-happens">
                  Не нравится этот сайт? 
                  <small>А жаль, но я сохранил старые версии <a href="/old" target="_blank">тут</a> и <a href="/superold" target="_blank">тут</a>. Только не пугайся!</small>
                </motion.div>
                <a onClick={this.handleClickScrollDown} id="welcome-scroll"></a>
              </section>);

    let en = (<section id="welcome">
                <motion.h1 initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>Typical IT</motion.h1>
                <motion.h2 transition={{ delay: 0.25 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>Some code</motion.h2>
                <motion.h4 transition={{ delay: 0.5 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>Bit design</motion.h4>
                <motion.h6 transition={{ delay: 0.75 }} initial={{ x: '-100px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>Pinch hw</motion.h6>
                <motion.div transition={{ delay: 1.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="welcome-dialog">
                  <h5>Hello, %username%!</h5>
                  <div className="welcome-dialog--item">
                    <div>My name is ch3rn1k and I am Fullstack JS.</div>
                    <div><small>Yeah, NodeJS, MERN and all of this stuff!</small></div>
                    <div><small>Just touched C# и C++, but survived and returned to the WEB. :D</small></div>
                  </div>
                  <div className="welcome-dialog--item">Creating user-friendly interfaces in complex applications - UX/UI.</div>
                  <div className="welcome-dialog--item">And of course, custom PC's, with water coolings, yum.</div>
                </motion.div>
                <motion.div transition={{ delay: 2.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="shit-happens">
                  Don't like this site?
                  <small>It's a pity, but I kept the old versions <a href="/old" target="_blank">here</a> and <a href="/superold" target="_blank">here</a>. Do not be scared!</small>
                </motion.div>
                <a onClick={this.handleClickScrollDown} id="welcome-scroll"></a>
              </section>);

    return this.props.language === 'ru' ? ru : en;
  }
}

export default Welcome