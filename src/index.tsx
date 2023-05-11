import { createRoot } from 'react-dom/client';
import App from './components/App';
import Welcome from './components/Welcome';
import Portfolio from './components/Portfolio';
import Mail from './components/Mail';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <App>
    <Welcome />
    <Portfolio />
    <Mail />
  </App>
);
