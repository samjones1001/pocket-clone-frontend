import React from 'react';
import './Button.css'

const Button = (props) => {
  const { text, onClick, type } = props;

  return (
    <button className={ type } onClick={ onClick }>
      { text }
    </button>
  )
}

export default Button;
