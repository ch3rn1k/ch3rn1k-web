import 'normalize.css';
import GlobalStyles from './styles';

import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import { App } from './components/App';

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
  <StyleSheetManager shouldForwardProp={() => true}>
    <GlobalStyles />
    <App />
  </StyleSheetManager>
);
