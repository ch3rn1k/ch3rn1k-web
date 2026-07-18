import { useEffect } from 'react';
import { HomePage } from '@/pages/home';
import { Cursor } from '@/widgets/cursor';
import { startFaviconSnake } from '@/shared/lib/favicon-snake';

export const App = () => {
  useEffect(() => {
    const titles = ['OR WEEB?', 'CAN I HAVE A SLEEP?', 'CALL THE POLICE', 'LEAVE ME ALONE!!!', 'LMAO'];
    document.title = 'ch3rn1k — ' + titles[(titles.length * Math.random()) | 0];

    return startFaviconSnake();
  }, []);

  return (
    <>
      <Cursor />
      <HomePage />
    </>
  );
};
