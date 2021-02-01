import React, { Component } from 'react'

import '../assets/styles/Mail.scss'

class Mail extends Component {
  render() {
    return(
      <section id="mail">
        <a href="mailto:hi@ch3rn1k.me">hi@ch3rn1k.me</a>
        <span>Пиши, не стесняйся! (:</span>
      </section>
    )
  }
}

export default Mail