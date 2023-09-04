import { ROUTES } from '@/routes';
import { RouterService } from '@/services/router';

import { tryGetFactIdByElement } from '../../utils';
import { Empty } from '../Empty/Empty';
import { Item } from '../Item';
import styles from './List.module.css';

export const FACTS_LIST_ID = 'facts-list-global';
export const getFactsListElement = () => document.getElementById(FACTS_LIST_ID);

let elementRendered = false;

const observer = new MutationObserver(() => {
  const element = getFactsListElement();
  if (!element) {
    elementRendered = false;
    return;
  }

  if (!elementRendered) {
    element.addEventListener('click', (e) => {
      const id = tryGetFactIdByElement(e.target);
      if (!id) {
        return;
      }

      const url = ROUTES.FACT.build({ id });
      RouterService.push(url.href);
    });
  }

  elementRendered = true;
});

observer.observe(document, { attributes: false, childList: true, characterData: false, subtree: true });

export const List = ({ items } = {}) => {
  if (!items || items.length === 0) {
    return Empty();
  }

  return `
    <div class="${styles.list}" id="${FACTS_LIST_ID}">
      ${items.map((i) => Item(i)).join('\n')}
    </div>
  `;
};
