import React from 'react';
import './App.css';

import ReadingList from '../ReadingList/ReadingList';

function App() {
  return (
    <div className="App" data-test="component-app">
      <ReadingList articles={ [] } />
    </div>
  );
}

export default App;
