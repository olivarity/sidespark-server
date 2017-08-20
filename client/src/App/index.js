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

  componentDidMount() {
    fetch('/api/users/me', { credentials: 'include' })
      .then(res => res.json())
      .then(result => this.setState({ auth: result }));
  }

  render() {
    const auth = this.state.auth;
    return (
      <Router>
        <div className="container">
          <Nav auth={this.state.auth} />
          <Route exact path="/" render={() =>
            auth
            ? <h1>You are signed in as {auth.name}</h1>
            : <h1>Welcome! Please sign in.</h1>
          } />
          <Route path="/discover" render={() => <h1>Discover</h1>} />
          <Route path="/create" render={() => <h1>Create</h1>} />
        </div>
      </Router>
    );
  }

}

export default App
