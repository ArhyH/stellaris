import { createRoot } from 'react-dom/client';

import { App } from './App';
import '@/shared/styles/style.global.scss';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
