import React, { Component } from 'react';
import './Input.css';

import Button from '../Button/Button';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }
  }

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  }

  handleSubmit = (e) => {
    this.props.handleSubmit(e, this.state.content);
    this.setState({ content: '' });
  }

  render() {
    const { placeholderText, buttonText } = this.props;
    const { content } = this.state;

    return (
      <div className="component-input">
        <input
          type="text"
          value={ content }
          placeholder={ placeholderText}
          onChange={ this.handleChange }
          className="input-textfield"
        />
        <Button
          text={ buttonText }
          type="btn btn-add"
          onClick={ this.handleSubmit }
        />
      </div>
    );
  }
}

export default Input;
