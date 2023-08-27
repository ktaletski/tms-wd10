import './vendor';
import './index.css';

import { AppHeader, AppLayout } from './components';
import { mockTasks } from './constants';
import { List } from './features/list';

function App() {
  return AppLayout({
    header: AppHeader({ title: 'Tуду' }),
    content: List({ items: mockTasks }),
  });
}

const root = document.getElementById('root');
root.innerHTML = App();
