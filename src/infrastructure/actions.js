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
  },
  changePackedStatus: (itemId, packed) => {
    AppDispatcher.dispatch({
      type: ItemActions.CHANGE_PACKED_STATUS,
      itemId,
      packed,
    });
  },
  unpackAllItems: () => {
    AppDispatcher.dispatch({
      type: ItemActions.UNPACK_ALL_ITEMS,
    });
  },
}