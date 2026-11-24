import { createRoot } from 'react-dom/client';
import './style.css';
import Page from './Page';

const root = createRoot(document.getElementById('root')!);
root.render(
  <Page/>,
);
