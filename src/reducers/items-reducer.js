import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED } from '../constants';
import initialState from '../store/initial-state';

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return [...state, action.item];
    case REMOVE_ITEM:
      const newState = state.filter(x => x.id !== action.id);
      return newState;
    case TOGGLE_ITEM:
      state.find(x => {
        if (x.id === action.id) {
          x.packed = !x.packed;
        }
      });
      return state;
    case MARK_ALL_AS_UNPACKED:
      state.forEach(x => {
        x.packed = false;
      });
      return state;
  }
  return state;
}
