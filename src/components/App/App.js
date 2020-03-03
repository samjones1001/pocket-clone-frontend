import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import ReadingList from '../ReadingList/ReadingList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/articles')
    .then((response) => {
      this.setState({ articles: response.data })
    })
    .catch((error) => {
    });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="App" data-test="component-app">
        <ReadingList articles={ articles } />
      </div>
    );
  }
}

export default App;
