import { ItemStatus } from '../../../constants';
import styles from './Item.module.css';

const STYLE_BY_STATUS = {
  [ItemStatus.COMPLETED]: styles.item__completed,
};

export const Item = ({ id, title, status }) => {
  return `
    <li id="${id}" class="${(styles.item, STYLE_BY_STATUS[status])
    }">${title}</li>
  `;
};
