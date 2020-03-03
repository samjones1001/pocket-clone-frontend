import React from 'react';
import './App.css';

import ArticleContainer from '../ArticleContainer/ArticleContainer';

function App() {
  return (
    <div className="App" data-test="component-app">
      <ArticleContainer articles={ [] } />
    </div>
  );
}

export default App;
