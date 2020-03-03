import React from 'react';
import './Articles.css';

import Article from '../Article/Article.js'

const Articles = (props) => {
  const { articles } = props;

  return (
    <div data-test="component-articles">
      { articles.map((article, index) => (
        <div data-test="article-div" key={index}><Article { ...article }/></div>
      ))}
    </div>
  );
}

export default Articles;
