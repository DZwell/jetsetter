import React, { Component } from 'react';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';
import { itemStore } from '../infrastructure/itemStore';
import { Actions } from '../infrastructure/actions';

class Application extends Component {
  state = {
    items: itemStore.items,
  }

  componentDidMount() {
    itemStore.on('change', this.updateItems)
  }

  componentWillUnmount() {
    itemStore.off('change', this.updateItems)
  }

  updateItems = () => {
    const items = itemStore.items;
    this.setState({ items });
  }

  get packedItems() {
    return this.state.items.filter(item => item.packed);
  };

  get unpackedItems() {
    return this.state.items.filter(item => !item.packed);
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
    const items = this.state.items;
    this._setItemPackedStatus(itemId, items, packed);
    this.setState({ items });
  }

  handleRemove = itemId => {
    this.setState((state) => {
      return { items: state.items.filter(x => x.id !== itemId) }
    });
  }

  render() {
    return (
      <div className="Application">
        <NewItem onSubmit={(evt) => Actions.addItem(evt)}/>
        <CountDown />
        <Items onChecked={this.handleChecked} onRemove={this.handleRemove} title="Unpacked Items" items={this.unpackedItems} />
        <Items onChecked={this.handleChecked} onRemove={this.handleRemove} title="Packed Items" items={this.packedItems} />
        <button className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }
};

export default Application;
