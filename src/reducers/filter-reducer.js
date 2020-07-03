import { UPDATE_PACKED_ITEMS_FILTER, UPDATE_UNPACKED_ITEMS_FILTER } from '../constants';

export default function(state = { unpackedItemsFilter: '', packedItemsFilter: '' }, action) {
  switch (action.type) {
    case UPDATE_PACKED_ITEMS_FILTER:
      state.packedItemsFilter = action.text;
      return state;
    case UPDATE_UNPACKED_ITEMS_FILTER:
      state.unpackedItemsFilter = action.text;
      return state;
  }
  return state;
}
