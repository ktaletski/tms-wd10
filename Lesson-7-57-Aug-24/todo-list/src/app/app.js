import './vendor';
import './index.css';

import { AppHeader, AppLayout } from './components';

function Search() {
  this.toString = function () {
    return '<div>Search</div>';
  };
}

function List() {
  this.toString = function () {
    return '<div>List</div>';
  };
}

function App() {
  this.state = {};

  this.render = function () {
    return new AppLayout({
      header: new AppHeader({ title: 'To Do List' }),
      content: `
        <div>
          ${new Search()}
          ${new List()}
        <div>
      `,
    });
  };
}

const root = document.getElementById('root');
root.innerHTML = new App().render();
