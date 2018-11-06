import React, { Component } from 'react';
import NavComponent from './components/NavComponent/NavComponent';
import MenuComponent from './components/MenuComponent/MenuComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <meta charSet="utf-8"></meta>
          <title>BotOne</title>
        </header>
        
        <NavComponent />
        <MenuComponent />
      </div>
    );
  }
}

export default App;