import React from 'react';
import './ArticleContainer.css';

import Article from '../Article/Article.js'

const ArticleContainer = (props) => {
  const { articles } = props;

  return (
    <div data-test="component-article-container">
      { articles.map((article, index) => (
        <div data-test="article-div" key={index}>
          <Article { ...article }/>
        </div>
      ))}
    </div>
  );
}

export default ArticleContainer;
