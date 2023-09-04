import { Item } from './Item';
import styles from './List.module.css';

export const List = ({ list }) => {
  return `
    <ol class="${styles.list}">
      ${list.map(Item).join('')}
    </ol>
  `;
};
