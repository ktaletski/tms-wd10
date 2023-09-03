import { kebabToCamelCase } from '../../utils/case';

export const LIST_ITEM_TAG = 'li';
export const LIST_ITEM_ID_DATA_ATTR = 'data-fact-id';
export const LIST_ITEM_ID_DATA_PROP = kebabToCamelCase(LIST_ITEM_ID_DATA_ATTR.replace('data-', ''));


