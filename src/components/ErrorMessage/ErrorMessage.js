import React from 'react';
import './ErrorMessage.css'

const ErrorMessage = (props) => {
  const { errorType } = props

  return (
    <div className="component-error-message">
      <h4 className="message-text">{ `Something went wrong while ${ errorType }. Please try again later`}</h4>
    </div>
  )
}

export default ErrorMessage;
