import React from 'react';
import './Article.css';

const Article = (props) => {
  const { url } = props

  return (
    <div data-test="component-article">
      <a href={ url } data-test="article-link">{ url }</a>
    </div>
  );
}

export default Article;
