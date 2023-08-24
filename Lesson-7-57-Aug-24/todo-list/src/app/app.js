import './vendor';
import './index.css';

import styles from './app.module.css';
import { AppLayout } from './components/AppLayout';

function Header({ title }) {
  this.render = function () {
    return `<div>${title}</div>`;
  };
}

function Search() {
  this.render = function () {
    return '<div>Search</div>';
  };
}

function List() {
  this.render = function () {
    return '<div>List</div>';
  };
}

function App() {
  this.state = {};

  this.render = function () {
    return new AppLayout({
      header: new Header({ title: 'To Do List' }).render(),
      content: `
        <div>
          ${new Search().render()}
          ${new List().render()}
        <div>
      `,
    }).render();
  };
}

const root = document.getElementById('root');
root.innerHTML = new App().render();
