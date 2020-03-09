import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ReadingList.css';

import Article from '../Article/Article';
import Input from '../Input/Input';
import withApiAccess from '../ApiWrapper/ApiWrapper';

class ReadingList extends Component {
  componentDidMount() {
    this.props.makeGetRequest('https://protected-harbor-70609.herokuapp.com/api/articles')
    .then((response) => {
      this.props.setInitialState(response)
    }).catch((error) => {
    });
  }

  handleInputSubmit = (e, urlToAdd) => {
    this.props.makePostRequest('https://protected-harbor-70609.herokuapp.com/api/articles', {url: urlToAdd})
    .then((response) => {
      this.props.addToState(response)
    }).catch((error) => {
    });
  }

  handleArticleDelete = (id) => {
    this.props.makeDeleteRequest(`https://protected-harbor-70609.herokuapp.com/api/articles/${id}`)
    .then((response) => {
      this.props.deleteFromState(id)
    }).catch((error) => {
    });
  }

  handleArticleUpdateIsRead = (id, newStatus) => {
    this.props.makePutRequest(`https://protected-harbor-70609.herokuapp.com/api/articles/${id}`, {isRead: newStatus})
    .then((response) => {
      this.props.updateState(id, newStatus)
    }).catch((error) => {
    });
  }

  render() {
    const { articles } = this.props;

    return (
      <div className="component-reading-list">
        <h3 className="title-text">Your Saved Articles</h3>
        <Grid container spacing={2}>
          { articles.map((article, index) => (
            <Grid item lg={4} md={6} xs={12}  className="article-grid-item" key={index}>
              <Article
                handleDelete={ this.handleArticleDelete }
                handleUpdateIsRead={ this.handleArticleUpdateIsRead }
                { ...article }
              />
            </Grid>
          ))}
        </Grid>
        <Input
          placeholderText="url"
          buttonText="Add To Reading List"
          handleSubmit={ this.handleInputSubmit }
        />
      </div>
    )
  }
}

const WrappedReadingList = withApiAccess(ReadingList)

export { ReadingList, WrappedReadingList }
