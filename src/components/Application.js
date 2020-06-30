import React, { Component } from 'react';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';
import { Actions, itemStore } from '../infrastructure';

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

  render() {
    return (
      <div className="Application">
        <NewItem onSubmit={Actions.addItem}/>
        <CountDown />
        <Items title="Unpacked Items" items={this.unpackedItems} />
        <Items title="Packed Items" items={this.packedItems} />
        <button onClick={Actions.unpackAllItems} className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }
};

export default Application;
