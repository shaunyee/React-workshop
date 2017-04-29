import React, { Component } from 'react';
import pepperoni from './pepperoni.svg';
import './App.css';
import Beer from './Beer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={pepperoni} className="App-logo" alt="logo" />
          <h1>Welcome to Shauns React Thingy!!!</h1>
        </div>
        <p className="App-intro">
          <ul className="Beer-list">
            <Beer />
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
