import React, { Component } from 'react';
import { Actions } from '../infrastructure';
import './Item.css';

class Item extends Component {
  handleChecked = () => {
    const { item } = this.props;
    Actions.changePackedStatus(item.id, !item.packed);
  }

  handleRemove = () => {
    Actions.deleteItem(this.props.item.id);
  }

  render() {
    const { item } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={this.handleChecked}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.handleRemove}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
