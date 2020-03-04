import React, { Component } from 'react';
import './ReadingListContainer.css';
import axios from 'axios';

import ReadingList from '../ReadingList/ReadingList'

class ReadingListContainer extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    this.makeApiGetRequest()
  }

  handleInputSubmit = (e, urlToAdd) => {
    this.makeApiPostRequest(urlToAdd);
  }

  handleArticleDelete = (id) => {
    this.makeApiDeleteRequest(id);
  }

  makeApiGetRequest = () => {
    axios.get('https://protected-harbor-70609.herokuapp.com/api/articles')
    .then((response) => {
      this.setState({ articles: response.data });
    }).catch((error) => {
    });
  }

  makeApiPostRequest = (urlToAdd) => {
    axios.post('https://protected-harbor-70609.herokuapp.com/api/articles', {
      url: urlToAdd
    }).then((response) => {
      this.setState({ articles: this.state.articles.concat(response.data) })
    }).catch((error) => {
    });
  }

  makeApiDeleteRequest = (id) => {
    axios.delete(`https://protected-harbor-70609.herokuapp.com/api/articles/${id}`)
    .then((response) => {
      this.setState({ articles: this.state.articles.filter((item, index) => item.id !== id) })
    }).catch((error) => {
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div data-test="component-reading-list-container">
        <ReadingList
          articles={ articles }
          handleInputSubmit={ this.handleInputSubmit }
          handleArticleDelete={ this.handleArticleDelete }
        />
      </div>
    );
  }
}

export default ReadingListContainer;
