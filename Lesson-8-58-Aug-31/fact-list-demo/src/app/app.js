import './vendor';
import './index.css';

import { AppHeader, AppLayout } from './components';
import { List } from './features/fact-list';
import { mockList } from './mockData';

const root = document.getElementById('root');
root.innerHTML = AppLayout({
  header: AppHeader({ title: 'Animal Facts' }),
  content: List({ items: mockList }),
});
