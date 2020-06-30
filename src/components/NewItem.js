import React, { Component } from 'react';

import './NewItem.css';
import { Actions } from '../infrastructure';

class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { value } = this.state;

    Actions.addItem(value);
    this.setState({ value: '' });
    event.preventDefault();
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
