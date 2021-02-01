import React, { Component } from 'react'
import Welcome from './Welcome.js'
import Portfolio from './Portfolio.js'
import Mail from './Mail.js'

import '../assets/styles/App.scss'

class App extends Component {
  render() {
    return (
      <>
        <Welcome language={this.getLanguage()} />
        <Portfolio language={this.getLanguage()} />
        <Mail language={this.getLanguage()} />
      </>
    )
  }

  getLanguage = () => {
    if (navigator.language === 'ru-RU' || navigator.language === 'ru') return 'ru';
    else return 'en';
  }
}

export default App