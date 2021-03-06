import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ReadingList.css';

import Article from '../Article/Article';
import Input from '../Input/Input';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import withApiAccess from '../ApiWrapper/ApiWrapper';
import baseUrl from '../../config';

class ReadingList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filterType: "none",
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    this.props.makeGetRequest(`${baseUrl}/api/articles`)
    .then((response) => {
      this.props.setInitialState(response)
      this.setState( { loading: false });
    }).catch((error) => {
      this.setState({ error: "loading your articles"})
    });
  }

  handleInputSubmit = (e, urlToAdd) => {
    this.props.makePostRequest(`${baseUrl}/api/articles`, {url: urlToAdd})
    .then((response) => {
      this.props.addToState(response);
      this.setState({ error: null });
    }).catch((error) => {
      this.setState({ error: "uploading your article"})
    });
  }

  handleArticleDelete = (id) => {
    this.props.makeDeleteRequest(`${baseUrl}/api/articles/${id}`)
    .then((response) => {
      this.props.deleteFromState(id);
    }).catch((error) => {
      this.setState({ error: "deleting your article"})
    });
    this.setState({ error: null });
  }

  handleArticleUpdateIsRead = (id, newStatus) => {
    this.props.makePutRequest(`${baseUrl}/api/articles/${id}`, {isRead: newStatus})
    .then((response) => {
      this.props.updateState(id, newStatus);
      this.setState({ error: null });
    }).catch((error) => {
      this.setState({ error: "updating your article"})
    });
  }

  setFilterType = (type) => (event) =>  {
    this.setState({ filterType: type });
  }

  filterArticles = () => {
    if (this.state.filterType === "unread") {
      return this.props.articles.filter((item, index) => item.isRead === false);
    } else if ( this.state.filterType === "read" ) {
      return this.props.articles.filter((item, index) => item.isRead === true);
    }
    return this.props.articles;
  }

  render() {
    return (
      <div className="component-reading-list">
        <div className="reading-list-header">
          <h3 className="title-text">Your Saved Articles</h3>
          <div className="reading-list-buttons">
            <Button
              icon="fas fa-list fa-lg"
              type={`btn btn-filter ${this.state.filterType === "none" ? "btn-filter-selected" : ""}`}
              onClick={ this.setFilterType("none") }
            />
            <Button
              icon="fas fa-book fa-lg"
              type={`btn btn-filter ${this.state.filterType === "unread" ? "btn-filter-selected" : ""}`}
              onClick={ this.setFilterType("unread") }
            />
            <Button
              icon="fas fa-book-open fa-lg"
              type={`btn btn-filter ${this.state.filterType === "read" ? "btn-filter-selected" : ""}`}
              onClick={ this.setFilterType("read") }
            />
          </div>
        </div>

        { this.state.error &&
          <ErrorMessage errorType={ this.state.error} />
        }

        { this.state.loading &&
          <Loader />
        }

        <Grid container spacing={2}>
          { this.filterArticles().map((article, index) => (
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
