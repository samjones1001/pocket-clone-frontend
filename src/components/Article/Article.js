import React from 'react';
import './Article.css';

const Article = (props) => {
  const { id, url, title, handleDelete } = props

  const onDeleteClicked = () => {
    handleDelete(id)
  }

  return (
    <div data-test="component-article">
      <a href={ url } data-test="article-link">{ title }</a>
      <button
        data-test="delete-button"
        onClick={ onDeleteClicked }
      >delete</button>
    </div>
  );
}

export default Article;
