import React from 'react';
import './ReadingList.css';

import Article from '../Article/Article';
import Input from '../Input/Input';

const ReadingList = (props) => {
  const { articles, handleInputSubmit, handleArticleDelete } = props;

  return (
    <div data-test="component-reading-list">
      { articles.map((article, index) => (
        <div data-test="article-div" key={index}>
          <Article
            handleDelete={ handleArticleDelete }
            { ...article }
          />
        </div>
      ))}
      <Input
        placeholderText="url"
        buttonText="Add To Reading List"
        handleSubmit={ handleInputSubmit }
      />
    </div>
  );
}

export default ReadingList;
