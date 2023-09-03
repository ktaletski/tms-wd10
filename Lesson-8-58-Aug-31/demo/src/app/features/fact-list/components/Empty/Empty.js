import styles from './Empty.module.css';

export const Empty = () => {
  return `
    <div class="${styles.container}">
      <h2>Всё сделано, ура! 🎉</h2>
    </div>
  `;
};
