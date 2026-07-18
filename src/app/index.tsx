import 'normalize.css';
import './styles/index.css';

import { createRoot } from 'react-dom/client';
import { App } from './ui/App';

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(<App />);
