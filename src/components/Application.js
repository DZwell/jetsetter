import './Application.css';

import React, { Component } from 'react';

import MarkAllAsUnpackedContainer from '../containers/MarkAllAsUnpackedContainer';
import NewItemContainer from '../containers/NewItemContainer';
import PackedFilterContainer from '../containers/PackedFilterContainer';
import PackedItemsContainer from '../containers/PackedItemsContainer';
import store from '../store';

import CountDown from './CountDown';
import Items from './Items';

class Application extends Component {
  state = {
    items: store.getState().items,
  };

  addItem = item => {
    this.setState({ items: [item, ...this.state.items] });
  };

  removeItem = item => {
    this.setState({
      items: this.state.items.filter(other => other.id !== item.id),
    });
  };

  markAsPacked = item => {
    const otherItems = this.state.items.filter(other => other.id !== item.id);
    const updatedItem = { ...item, packed: !item.packed };
    this.setState({ items: [updatedItem, ...otherItems] });
  };

  render() {
    const { items } = this.state;
    const stuff = store.getState();
    const unpackedItems = items.filter(item => !item.packed);
    const packedItems = items.filter(item => item.packed);

    return (
      <div className="Application">
        <NewItemContainer />
        <CountDown {...this.state} />
        <Items
          title="Unpacked Items"
          items={unpackedItems}
          onCheckOff={this.markAsPacked}
          onRemove={this.removeItem}
        />
        <PackedItemsContainer render={() => <PackedFilterContainer />} />
        <MarkAllAsUnpackedContainer />
      </div>
    );
  }
}

export default Application;
