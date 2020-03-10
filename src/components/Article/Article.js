import React from 'react';
import './Article.css';

import Button from '../Button/Button';

const Article = (props) => {
  const { id, url, title, isRead, handleDelete, handleUpdateIsRead } = props

  const onDeleteClicked = () => {
    handleDelete(id)
  }

  const onUpdateIsReadClicked = () => {
    handleUpdateIsRead(id, !isRead)
  }

  const formatTitle = (title) => {
    return title.length > 116 ? `${title.substring(0, 115)}...` : title
  }

  return (
    <div className="component-article">
      <h4><a href={ url } className="article-card-text">{ formatTitle(title) }</a></h4>
      <div className="article-card-right">
        <div className="button-box">
          <Button
            icon="far fa-check-circle fa-lg"
            onClick={ onUpdateIsReadClicked }
            type={`btn ${ isRead ? "btn-mark-unread" : "btn-mark-read" }`}
          />
          <Button
            icon="fas fa-trash-alt fa-lg"
            onClick={ onDeleteClicked }
            type="btn btn-delete"
          />
        </div>
      </div>
    </div>
  );
}

export default Article;
