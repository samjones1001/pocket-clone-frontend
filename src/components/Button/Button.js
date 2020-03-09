import React from 'react';
import './Button.css'

const Button = (props) => {
  const { icon, onClick, type } = props;

  return (
    <div className={ type } onClick={ onClick }>
      <i className={ icon }></i>
    </div>
  )
}

export default Button;
