import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
        </div>
      </Router>
    );
  }
}

export default App;
