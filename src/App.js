import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Nav from './Nav.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/discover" render={() => <h1>Discover</h1>} />
          <Route path="/login" render={() => <h1>Sign In</h1>} />
        </div>
      </Router>
    );
  }
}

export default App
