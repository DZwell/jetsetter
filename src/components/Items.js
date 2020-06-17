import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  updateSearchTerm = searchTerm => {};

  handleChecked = (itemId, packed) => {
    this.props.onChecked(itemId, packed);
  }

  handleRemove = itemId => {
    this.props.onRemove(itemId);
  }

  render() {
    const { title, items } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={''} onChange={this.updateSearchTerm} />
        {items
          .filter(item =>
            // Hmm… this needs some work.
            item.value.toLowerCase().includes(''.toLowerCase()),
          )
          .map(item => (
            <Item
              key={item.id}
              onCheckOff={this.handleChecked}
              onRemove={this.handleRemove}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
