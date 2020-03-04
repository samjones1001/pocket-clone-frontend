import React from 'react';
import './Article.css';

const Article = (props) => {
  const { id, url, handleDelete } = props

  const onDeleteClicked = () => {
    handleDelete(id)
  }

  return (
    <div data-test="component-article">
      <a href={ url } data-test="article-link">{ url }</a>
      <button
        data-test="delete-button"
        onClick={ onDeleteClicked }
      >delete</button>
    </div>
  );
}

export default Article;
