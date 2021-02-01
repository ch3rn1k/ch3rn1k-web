import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import pkg from '../package.json';

/** Notification that this build is not compiled/dev. */
if (process.env.NODE_ENV !== 'production')
console.log(`%cDEV BUILD ${pkg.version}`, 'font-size: 2rem; font-weight: 600;');

ReactDOM.render(<App />, document.getElementById('app'));