import { UPDATE_NEW_ITEM_VALUE } from '../constants';
import initialState from '../store/initial-state';

export default function(state = initialState, action) {
  if (action.type === UPDATE_NEW_ITEM_VALUE) {
    state = action.value;
    return state;
  }
  return state;
}