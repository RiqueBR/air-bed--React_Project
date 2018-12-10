import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main.js';
import SearchFormBox from './components/display/searchForm/searchFormBox';

class App extends Component {
  render() {
    return (
      <SearchFormBox/>
    );
  }
}

export default App;
