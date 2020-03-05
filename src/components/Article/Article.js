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

  const updateButtonProps = () => {
    if (isRead) {
      return {
        text: "Mark as unread",
        onClick: onUpdateIsReadClicked,
        type: "mark-unread-button"
      }
    }

    return {
      text: "Mark as read",
      onClick: onUpdateIsReadClicked,
      type: "mark-read-button"
    }
  }

  const buttonProps = updateButtonProps()

  return (
    <div data-test="component-article">
      <a href={ url } data-test="article-link">{ title }</a>
      <button
        data-test="delete-button"
        onClick={ onDeleteClicked }
      >delete</button>
      <Button { ...buttonProps }/>
    </div>
  );
}

export default Article;
