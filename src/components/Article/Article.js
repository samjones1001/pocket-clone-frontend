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
        type: "btn btn-mark-unread"
      }
    }

    return {
      text: "Mark as read",
      onClick: onUpdateIsReadClicked,
      type: "btn btn-mark-read"
    }
  }

  const buttonProps = updateButtonProps()

  return (

    <div className="component-article">
      <div className="article-card-left">
        <img src={ require('../../assets/book-placeholder.png') } alt="Article" className="article-img"/>
      </div>
      <div className="article-card-right">
        <h4><a href={ url } className="article-card-text">{ title }</a></h4>
        <div className="button-box">
          <Button
            text='Delete'
            onClick={ onDeleteClicked }
            type="btn btn-delete"
          />
          <Button { ...buttonProps }/>
        </div>
      </div>
    </div>
  );
}

export default Article;
