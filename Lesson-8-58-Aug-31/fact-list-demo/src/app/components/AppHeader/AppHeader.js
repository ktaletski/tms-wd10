import styles from './AppHeader.module.css';

export function AppHeader({ title }) {
  return `
    <div class=${styles.container}>
      <h1>${title}</h1>
    </div>
  `;
}
