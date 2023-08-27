import { ItemStatus } from '../../../../constants';
import styles from './Item.module.css';
import { getCheckedBy, getItemId } from './utils';

const TITLE_STYLE_BY_STATUS = {
  [ItemStatus.COMPLETED]: styles.item__completed,
};

export function Item(props) {
  if (!props || typeof props !== 'object') {
    return '';
  }

  const { id, status, title } = props;
  const titleStyle = TITLE_STYLE_BY_STATUS[status];

  return `
    <li class="${styles.item}">
      <input
        type="checkbox"
        id="${getItemId(id)}"
        ${getCheckedBy(status)}
      />
      <label
        for="${getItemId(id)}"
        class="${styles.title} ${titleStyle}"
      >
        ${title}
      </label>
      <button class="${styles.delete}">✕</button>
    </li>
  `;
}
