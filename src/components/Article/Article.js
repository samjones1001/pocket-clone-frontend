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
    if (title.length > 116) {
      return `${title.substring(0, 115)}...`;
    }
    return title;
  }

  const updateButtonProps = () => {
    if (isRead) {
      return {
        icon: "far fa-check-circle fa-lg",
        onClick: onUpdateIsReadClicked,
        type: "btn btn-mark-unread"
      }
    }

    return {
      icon: "far fa-check-circle fa-lg",
      onClick: onUpdateIsReadClicked,
      type: "btn btn-mark-read"
    }
  }

  const buttonProps = updateButtonProps()

  return (
    <div className="component-article">
      <div className="article-card">
        <div className="article-card-left">
          <h4><a href={ url } className="article-card-text">{ formatTitle(title) }</a></h4>
        </div>
        <div className="article-card-right">
          <div className="button-box">
            <Button { ...buttonProps }/>
            <Button
              icon="fas fa-trash-alt fa-lg"
              onClick={ onDeleteClicked }
              type="btn btn-delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
