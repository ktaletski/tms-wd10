import styles from './AppLayout.module.css';

export function AppLayout({ header, content }) {
  this.render = function () {
    return `
      <div class=${styles.container}>
        <header class=${styles.header}>
          ${header}
        </header>
        <main class=${styles.main}>
          ${content}
        </main>
      </div>
    `;
  };
}
