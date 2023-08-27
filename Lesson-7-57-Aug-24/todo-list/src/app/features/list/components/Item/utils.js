import { ItemStatus } from '../../../../constants';

export const getCheckedBy = (status) => {
  if (status === ItemStatus.COMPLETED) {
    return 'checked';
  }
  return '';
};

export const getItemId = (id) => `todo-item-${id}`;
