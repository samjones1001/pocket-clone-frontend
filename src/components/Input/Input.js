import React from 'react';
import './Input.css';

const Input = ({ placeholderText, buttonText, content, handleChange }) => {
  return (
    <div data-test="component-input">
      <input
        type="text"
        data-test="input-textfield"
        value={ content }
        placeholder={ placeholderText}
        onChange={ handleChange }
      />
      <button type="button" data-test="input-button">{ buttonText }</button>
    </div>
  );
}

export default Input;
