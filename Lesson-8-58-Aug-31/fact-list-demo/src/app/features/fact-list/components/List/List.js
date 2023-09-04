import { ROUTES } from '@/routes';
import { RouteService } from '@/services/router';

import { Item } from '../Item';
import styles from './List.module.css';

const FACTS_LIST_ELEMENT_ID = 'facts-list';

const getListItemId = (element) =>
  element.closest('li[data-fact-id]')?.dataset.factId;

let hasClickHandler = false;
const addListClickHandler = () => {
  const listElement = document.getElementById(FACTS_LIST_ELEMENT_ID);

  if (!listElement) {
    hasClickHandler = false;
    return;
  }

  if (hasClickHandler) {
    return;
  }

  listElement.addEventListener('click', (event) => {
    const id = getListItemId(event.target);
    if (!id) {
      return;
    }

    RouteService.push(ROUTES.FACT_DETAILS.buildPath({ id }));
  });
  hasClickHandler = true;
};

window.addEventListener('DOMContentLoaded', addListClickHandler);
const observer = new MutationObserver(addListClickHandler);

observer.observe(document, {
  attributes: false,
  childList: true,
  characterData: false,
  subtree: true,
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
