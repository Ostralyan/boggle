import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Boggle from './Boggle/Boggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Boggle />
      </div>
    );
  }
}

export default App;
