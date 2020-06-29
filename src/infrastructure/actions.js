import { AppDispatcher } from './dispatcher';
import { ItemActions } from './actionTypes';

export const Actions = {
  addItem: (item) => {
    AppDispatcher.dispatch({
      type: ItemActions.ADD_ITEM,
      item,
    });
  },
  deleteItem: (itemId) => {
    AppDispatcher.dispatch({
      type: ItemActions.DELETE_ITEM,
      itemId,
    });
  }
}