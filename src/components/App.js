import React from 'react'
import Welcome from './Welcome.js'
import Portfolio from './Portfolio.js'
import Mail from './Mail.js'

import msRU from '../language/ru'
import msEN from '../language/en'

import '../assets/styles/App.scss'

const App = () => {
  /** FUNCTIONS */
  const getLanguageMessages = () => {
    if (navigator.language === 'ru-RU' || navigator.language === 'ru') return msRU;
    else return msEN;
  };

  /** TEMPLATE */
  return (
    <>
      <Welcome ms={getLanguageMessages()} />
      <Portfolio ms={getLanguageMessages()} />
      <Mail ms={getLanguageMessages()} />
    </>
  );
};

export default App;