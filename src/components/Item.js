import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  handleRemove = item => {
    this.props.onRemove(item.id);
  }

  render() {
    const { item } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => {}}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.handleRemove.bind(this, item)}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
