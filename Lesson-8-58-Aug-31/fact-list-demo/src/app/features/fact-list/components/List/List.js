import { Item } from '../Item';
import styles from './List.module.css';

const FACTS_LIST_ELEMENT_ID = 'facts-list';

const getListItemId = (element) =>
  element.closest('li[data-fact-id]')?.dataset.factId;

window.addEventListener('DOMContentLoaded', () => {
  const listElement = document.getElementById(FACTS_LIST_ELEMENT_ID);

  listElement.addEventListener('click', (event) => {
    const id = getListItemId(event.target);
    console.log(id);
  });
});

export const List = ({ items } = {}) => {
  if (!items) {
    return '';
  }

  return `
    <ol class="${styles.list}" id="${FACTS_LIST_ELEMENT_ID}">
      ${items.map(Item).join('')}
    </ol>
  `;
};
