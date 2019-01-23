import React, { Component } from 'react';
import './App.css';
import Promises from './Promises/Promises';
import CustomPromises from './Promises/CustomPromises';
import PromiseMethods from './Promises/PromiseMethods';
import AsyncAwait from './Promises/AsyncAwait';

// Import and use these as you go!
class App extends Component {
  render() {
    return (
      <div className="App">
        <Promises />
        <CustomPromises />
        <PromiseMethods />
        <AsyncAwait />
      </div>
    );
  }
}

export default App;
