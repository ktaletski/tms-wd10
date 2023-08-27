import { AddItemButton } from '../AddItemButton';
import { Empty } from '../Empty/Empty';
import { Item } from '../Item';
import styles from './List.module.css';

export function List({ items } = {}) {
  if (!items || items.length === 0) {
    return Empty();
  }

  return `
    <div class="${styles.list}">
      ${items.map((i) => Item(i)).join('\n')}
      ${AddItemButton()}
    </div>
  `;
}
