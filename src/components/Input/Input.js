import React, { Component } from 'react';
import './Input.css';

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
      <div data-test="component-input">
        <input
          type="text"
          data-test="input-textfield"
          value={ content }
          placeholder={ placeholderText}
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-test="input-button"
          onClick={ this.handleSubmit }
        >{ buttonText }</button>
      </div>
    );
  }
}

export default Input;
