import { LIST_ITEM_ID_DATA_ATTR, LIST_ITEM_TAG } from '../../constants';
import styles from './Item.module.css';

export function Item(props) {
  if (!props || typeof props !== 'object') {
    return '';
  }

  const { _id, text } = props;

  return `
    <${LIST_ITEM_TAG} class="${styles.item}" ${LIST_ITEM_ID_DATA_ATTR}="${_id}">
      <span
        class="${styles.title}"
      >
        ${text}
      </span>
    </${LIST_ITEM_TAG}>
  `;
}
