import { useEffect } from 'react';
import { pageIconRandomizer } from '../ts/Util';
import { Welcome } from './Welcome';
import { Portfolio } from './Portfolio';
import { Mail } from './Mail';

export const App = () => {
  useEffect(() => {
    const titles = ['OR WEEB?', 'CAN I HAVE A SLEEP?', 'CALL THE POLICE', 'LEAVE ME ALONE!!!', 'LMAO'];
    document.title = 'WEB CH3RN1K — ' + titles[(titles.length * Math.random()) | 0];

    const iconRandomizer = setInterval(() => pageIconRandomizer(), 500);
    return () => clearInterval(iconRandomizer);
  }, []);

  return (
    <>
      <Welcome />
      <Portfolio />
      <Mail />
    </>
  );
};
