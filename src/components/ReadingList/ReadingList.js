import React from 'react';
import './ReadingList.css';

import Article from '../Article/Article.js'

const ReadingList = (props) => {
  const { articles } = props;

  return (
    <div data-test="component-reading-list">
      { articles.map((article, index) => (
        <div data-test="article-div" key={index}>
          <Article { ...article }/>
        </div>
      ))}
    </div>
  );
}

export default ReadingList;
