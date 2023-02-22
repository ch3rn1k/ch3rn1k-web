import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import pkg from '../package.json';

/** Notification that this build is not compiled/dev. */
if (process.env.NODE_ENV !== 'production')
console.log(`%cDEV BUILD ${pkg.version}`, 'font-size: 2rem; font-weight: 600;');

class Core {
  constructor() {
    this.titles = ['OR WEEB?', 'CAN I HAVE A SLEEP?', 'CALL THE POLICE', 'LEAVE ME ALONE!!!', 'LMAO'];
    this.favicon = document.querySelector('link[rel="icon"]').href;

    setInterval(() => this.pageIconRandomizer(), 500);

    document.title = 'WEB CH3RN1K — ' + this.titles[this.titles.length * Math.random() | 0];
  }

  /** FUNCTIONS */
  pageIconRandomizer() {
    const emojiList = ['🤡', '😂', '😍', '😏', '🤔', '😎', '🌚', '🌝', '👅', '💩', '🥴', '🤕', '🤤', '🤬', '🥳'];

    let canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;

    let context = canvas.getContext('2d');
    let img = document.createElement('img');
    img.src = this.favicon;

    img.onload = () => {
      /** Draw original favicon as background. */
      context.drawImage(img, 0, 0, 16, 16);

      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(emojiList[emojiList.length * Math.random() | 0], this.getOS() === 'Mac OS' || this.getOS() === 'iOS' ? canvas.width / 2 - 0.125 : canvas.width / 2, this.getOS() === 'Mac OS' || this.getOS() === 'iOS' ? canvas.height / 2 + 1.05 : canvas.height / 2);
      
      document.querySelector('[rel="icon"]').href = canvas.toDataURL('image/png');
    };
  }
  
  /** HELPERS */
  getOS() {
    let userAgent = window.navigator.userAgent;
    let platform = window.navigator.platform;
    let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    let iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    if (macosPlatforms.indexOf(platform) !== -1) return 'Mac OS';
    else if (iosPlatforms.indexOf(platform) !== -1) return 'iOS';
    else if (windowsPlatforms.indexOf(platform) !== -1) return 'Windows';
    else if (/Android/.test(userAgent)) return 'Android';
    else if (!os && /Linux/.test(platform)) return 'Linux';

    return null;
	}
}
new Core();

ReactDOM.render(<App />, document.getElementById('app'));
