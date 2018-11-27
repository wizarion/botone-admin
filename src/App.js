import React, { Component } from 'react';
import NavComponent from './components/NavComponent/NavComponent';
import MenuComponent from './components/MenuComponent/MenuComponent';
import ContentComponent from './components/ContentComponent/ContentComponent'
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
            <div style={{display: 'flex'}}>
               <MenuComponent />
               <ContentComponent />
            </div>
         </div>
      );
   }
}

export default App;