import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
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

class Application extends Component {
  state = {
    items: defaultState,
  };

  get packedItems() {
    return this.state.items.filter(item => item.packed);
  };

  get unpackedItems() {
    return this.state.items.filter(item => !item.packed);
  };

  _buildItemObject = itemName => {
    return {
      value: itemName,
      id: uniqueId(),
      packed: false,
    }
  };

  _setItemPackedStatus = (itemId, items, packed) => {
    for (const item of items) {
      if (item.id === itemId) {
        item.packed = packed;
        break;
      }
    }
  }

  handleChecked = (itemId, packed) => {
    const items = [...this.state.items];
    this._setItemPackedStatus(itemId, items, packed);
    this.setState({ items });
  }

  handleSubmit = value => {
    const newItem = this._buildItemObject(value);
    this.setState(state => ({ items: [...state.items, newItem] }));
  };

  handleRemove = itemId => {
    this.setState((state) => {
      return { items: state.items.filter(x => x.id !== itemId) }
    });
  }

  render() {
    return (
      <div className="Application">
        <NewItem onSubmit={this.handleSubmit}/>
        <CountDown />
        <Items onChecked={this.handleChecked} onRemove={this.handleRemove} title="Unpacked Items" items={this.unpackedItems} />
        <Items onChecked={this.handleChecked} onRemove={this.handleRemove} title="Packed Items" items={this.packedItems} />
        <button className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }
};

export default Application;
