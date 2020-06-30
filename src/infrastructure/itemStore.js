import uniqueId from 'lodash/uniqueId';
import * as EventEmitter from 'events';
import { AppDispatcher } from './dispatcher';
import { ItemActions } from './actionTypes';

class ItemStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      switch (action.type) {
        case ItemActions.ADD_ITEM:
          this.handleAddItem(action.item);
          break;
        case ItemActions.DELETE_ITEM:
          this.handleDeleteItem(action.itemId);
          break;
        case ItemActions.CHANGE_PACKED_STATUS:
          this.handleChangePackedStatus(action.itemId, action.packed);
          break;
        case ItemActions.UNPACK_ALL_ITEMS:
          this.handleUnpackAllItems();
          break;
      }
    });
  }

  _items = [
    { value: 'Pants', id: uniqueId(), packed: false },
    { value: 'Jacket', id: uniqueId(), packed: false },
    { value: 'iPhone Charger', id: uniqueId(), packed: false },
    { value: 'MacBook', id: uniqueId(), packed: false },
    { value: 'Sleeping Pills', id: uniqueId(), packed: true },
    { value: 'Underwear', id: uniqueId(), packed: false },
    { value: 'Hat', id: uniqueId(), packed: false },
    { value: 'T-Shirts', id: uniqueId(), packed: false },
    { value: 'Belt', id: uniqueId(), packed: false },
    { value: 'Passport', id: uniqueId(), packed: true },
    { value: 'Sandwich', id: uniqueId(), packed: true },
  ];

  get items() {
    return this._items;
  }

  handleAddItem = value => {
    const newItem = this._buildItemObject(value);
    this._items.push(newItem);
    this.emit('change');
  };

  handleDeleteItem = itemId => {
    this._items = this._items.filter(x => x.id !== itemId);
    this.emit('change');
  }

  handleChangePackedStatus = (itemId, packed) => {
    this._setItemPackedStatus(itemId, packed);
    this.emit('change');
  }

  handleUnpackAllItems = () => {
    for (const item of this._items) {
      item.packed = false;
    }
    this.emit('change');
  }

  _setItemPackedStatus = (itemId, isPacked) => {
    for (const item of this._items) {
      if (item.id === itemId) {
        item.packed = isPacked;
        break;
      }
    }
  }

  _buildItemObject = itemName => {
    return {
      value: itemName,
      id: uniqueId(),
      packed: false,
    }
  };
}

export const itemStore = new ItemStore();