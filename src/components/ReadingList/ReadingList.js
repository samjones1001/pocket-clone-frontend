import React from 'react';
import './ReadingList.css';

import Articles from '../Articles/Articles'
import Input from '../Input/Input'

const ReadingList = (props) => {
  const { articles, handleInputSubmit } = props;

  return (
    <div data-test="component-reading-list">
      <Articles articles={ articles }/>
      <Input
        placeholderText="url"
        buttonText="Add To Reading List"
        handleSubmit={ handleInputSubmit }
      />
    </div>
  );
}

export default ReadingList;
