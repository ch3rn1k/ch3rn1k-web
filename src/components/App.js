import React, { Component } from 'react'
import Welcome from './Welcome.js'
import Portfolio from './Portfolio.js'
import Mail from './Mail.js'

import '../assets/styles/App.scss'

class App extends Component {
  render() {
    return (
      <>
        <Welcome />
        <Portfolio />
        <Mail />
      </>
    )
  }
}

export default App