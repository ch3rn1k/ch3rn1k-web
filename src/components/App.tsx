import { Fragment, ReactNode, useEffect } from 'react';
import { pageIconRandomizer } from '../utils';

const App = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const titles = ['OR WEEB?', 'CAN I HAVE A SLEEP?', 'CALL THE POLICE', 'LEAVE ME ALONE!!!', 'LMAO'];
    document.title = 'WEB CH3RN1K — ' + titles[(titles.length * Math.random()) | 0];

    const iconRandomizer = setInterval(() => pageIconRandomizer(), 500);
    return () => clearInterval(iconRandomizer);
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default App;
