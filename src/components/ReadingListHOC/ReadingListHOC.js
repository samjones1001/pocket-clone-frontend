import React, { Component } from 'react';
import './ReadingListHOC.css';
import axios from 'axios';

import ReadingList from '../ReadingList/ReadingList'

class ReadingListHOC extends Component {
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

  render() {
    const { articles } = this.state;

    return (
      <div data-test="component-reading-list-hoc">
        <ReadingList articles={ articles } handleInputSubmit={ this.handleInputSubmit }/>
      </div>
    );
  }
}

export default ReadingListHOC;
