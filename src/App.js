import React, { Component } from 'react';
import './App.css';
import ToWatchList from './containers/ToWatchList/ToWatchList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ToWatchList/>
      </div>
    );
  }
}

export default App;
