import React from 'react';

const Button = (props) => {
  const { text, onClick, type } = props;

  return (
    <button
      data-test={ type }
      onClick={ onClick }
    >
      { text }
    </button>
  )
}

export default Button;
