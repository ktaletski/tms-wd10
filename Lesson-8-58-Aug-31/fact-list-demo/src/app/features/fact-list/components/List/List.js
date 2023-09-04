import { Item } from '../Item';
import styles from './List.module.css';

export const List = ({ items } = {}) => {
  if (!items) {
    return '';
  }

  return `
    <ol class="${styles.list}">
      ${items.map(Item).join('')}
    </ol>
  `;
};
