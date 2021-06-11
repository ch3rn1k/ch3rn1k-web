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

  const allMessages = getLanguageMessages();

  /** TEMPLATE */
  return (
    <>
      <Welcome ms={allMessages} />
      <Portfolio ms={allMessages} />
      <Mail ms={allMessages} />
    </>
  );
};

export default App;