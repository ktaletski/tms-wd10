import './vendor';
import './app.css';

import { ItemStatus } from './constants';
import { List } from './features/list';

const mockTasks = [
  { id: 'h18ebac', title: 'Вынести мусор', status: ItemStatus.NEW },
  { id: 'lDAc9If', title: 'Приготовить ужин', status: ItemStatus.NEW },
  { id: 'I1aba0c', title: 'Выспаться', status: ItemStatus.COMPLETED },
];

const AppLayout = ({ header, content }) => {
  return `
    <header>${header}</header>
    <main>
      ${content}
    </main>
  `;
};

const App = ({ title, list }) => {
  return AppLayout({ title, content: List({ list }) });
};

const root = document.getElementById('root');
root.innerHTML = App({ title: 'Todo List', list: mockTasks });
