import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import ReadingList from '../ReadingList/ReadingList';
import Input from '../Input/Input';

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      urlToAdd: ''
    }
  }

  componentDidMount() {
    axios.get('https://protected-harbor-70609.herokuapp.com/api/articles')
    .then((response) => {
      this.setState({ articles: response.data });
    })
    .catch((error) => {
    });
  }

  handleInputChange = (e) => {
    this.setState({ urlToAdd: e.target.value });
  }

  render() {
    const { articles, urlToAdd } = this.state;

    return (
      <div className="App" data-test="component-app">
        <ReadingList articles={ articles } />
        <Input
          placeholderText="Article url"
          buttonText="Add to reading list"
          value={ urlToAdd }
          handleChange={ this.handleInputChange }
        />
      </div>
    );
  }
}

export default App;
