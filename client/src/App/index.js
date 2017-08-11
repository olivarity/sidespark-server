import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import '../spectre.min.css';

import Nav from '../Nav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: null,
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Nav auth={this.state.auth} />
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/discover" render={() => <h1>Discover</h1>} />
          <Route path="/create" render={() => <h1>Create</h1>} />
        </div>
      </Router>
    );
  }

}

export default App
