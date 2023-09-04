import { LIST_ITEM_ID_DATA_ATTR, LIST_ITEM_ID_DATA_PROP, LIST_ITEM_TAG } from './constants';

export const tryGetFactIdByElement = (element) => {
  return element.closest(`${LIST_ITEM_TAG}[${LIST_ITEM_ID_DATA_ATTR}]`).dataset[LIST_ITEM_ID_DATA_PROP];
};
