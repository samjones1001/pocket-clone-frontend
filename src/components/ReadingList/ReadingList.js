import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ReadingList.css';

import Article from '../Article/Article';
import Input from '../Input/Input';
import withApiAccess from '../ApiWrapper/ApiWrapper';

class ReadingList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.props.makeGetRequest('https://protected-harbor-70609.herokuapp.com/api/articles')
    .then((response) => {
      this.setState({ articles: response })
    }).catch((error) => {
    });
  }

  handleInputSubmit = (e, urlToAdd) => {
    this.props.makePostRequest('https://protected-harbor-70609.herokuapp.com/api/articles', {url: urlToAdd})
    .then((response) => {
      this.setState({ articles: this.state.articles.concat(response) });
    }).catch((error) => {
    });
  }

  handleArticleDelete = (id) => {
    this.props.makeDeleteRequest(`https://protected-harbor-70609.herokuapp.com/api/articles/${id}`)
    .then((response) => {
      this.setState({ articles: this.state.articles.filter((item, index) => item.id !== id) });
    }).catch((error) => {
    });
  }

  handleArticleUpdateIsRead = (id, newStatus) => {
    this.props.makePutRequest(`https://protected-harbor-70609.herokuapp.com/api/articles/${id}`, {isRead: newStatus})
    .then((response) => {
      this.setState(state => {
        return  this.state.articles.map((item) => {
          if (item.id === id) { item.isRead = newStatus }
          return item
        });
      });
    }).catch((error) => {
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="component-reading-list">
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
