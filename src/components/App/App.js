import React, { Component } from 'react';
import './App.css';

import { WrappedReadingList } from '../ReadingList/ReadingList';
import { WrappedRecommendationsList } from '../RecommendationsList/RecommendationsList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  setInitialState = (articles) => this.setState({ articles: articles });


  addToState = (article) => {
    this.setState({ articles: this.state.articles.concat(article) });
  }

  deleteFromState = (id) => {
    this.setState({ articles: this.state.articles.filter((item, index) => item.id !== id) })
  }

  updateState = (id, newStatus) => {
    this.setState(state => {
      return  this.state.articles.map((item) => {
        if (item.id === id) { item.isRead = newStatus }
        return item
      });
    });
  }

  render() {
    return (
      <div className="component-app">
        <WrappedRecommendationsList
          addToState={ this.addToState }
        />
        <WrappedReadingList
          articles={ this.state.articles }
          setInitialState={ this.setInitialState }
          addToState={ this.addToState }
          deleteFromState={ this.deleteFromState }
          updateState={ this.updateState }
        />
      </div>
    )
  }
}

export default App;
