import React from 'react';
import './Recommendation.css';

import Button from '../Button/Button';

const Recommendation = (props) => {
  const { title, url, handleAddToList } = props

  const onAddToListClicked = () => {
    handleAddToList(url)
  }

  return (
    <div className="component-recommendation">
      <a className="recommendation-link" href={ url }>{ title }</a>
      <Button icon="fas fa-plus" type=" btn btn-add" onClick={ onAddToListClicked } />
    </div>
  );
}

export default Recommendation;
