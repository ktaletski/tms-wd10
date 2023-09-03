import styles from './blue.module.css';

export function makeItBlue() {
  const yes = confirm('Make background blue?');

  if (yes) {
    const root = document.getElementById('root');
    root.className = styles.blue;
  }
}
