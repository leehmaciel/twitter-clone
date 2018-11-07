import React, { Component } from 'react';
import './App.css';
import Inicio from './Inicio.js'
import Profile from './Profile.js'
import Newcard from './Newcard'
import Follow from './Follow'
import Card from './Card'
import Trends from './Trends'

//import React from 'react';
//const App = () => <h1> Hello Devas </h1>

class App extends Component {
  render() {
    return (
      <div className="App">

          
          <header className="App-header">
            <Inicio />
          </header>

          <header className="App-profile">
            <Profile />
          </header>

          <header className="App-trends">
            <Trends />
          </header>

          <header className="App-newcard">
            <Newcard />
          </header>

          <header className="App-card">
            <Card />
          </header>

          <header className="App-card">
            <Card />
          </header>

          <header className="App-follow">
            <Follow />
          </header>





      </div>
    );
  }
}


export default App;
