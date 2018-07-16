import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';


const Button = styled.button`
display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: green;
  border: white;
  border-bottom: 2px solid green;
  `;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started <Button label="OK!">OK!</Button>
          edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
