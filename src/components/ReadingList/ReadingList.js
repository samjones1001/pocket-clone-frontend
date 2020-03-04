import React, { Component } from 'react';
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

  render() {
    const { articles } = this.state;

    return (
      <div data-test='component-reading-list'>
        { articles.map((article, index) => (
          <div data-test="article-div" key={index}>
            <Article
              handleDelete={ this.handleArticleDelete }
              { ...article }
            />
          </div>
        ))}
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
