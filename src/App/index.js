import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import QueryString from 'query-string';
import '../spectre.min.css';

import Nav from '../Nav';
import Login from '../Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: null,
    };

    this.handleAuth = this.handleAuth.bind(this);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Nav auth={this.state.auth} />
          <Route exact path="/" render={() => <h1>Token: {this.state.auth}</h1>} />
          <Route path="/discover" render={() => <h1>Discover</h1>} />
          <Route path="/create" render={() => <h1>Create</h1>} />
          <Route path="/slack/auth" render={({ location }) =>
            this.state.auth
            ? <Redirect to="/" />
            : <Login
              query={QueryString.parse(location.search)}
              callback={this.handleAuth}
            />
          } />
        </div>
      </Router>
    );
  }

  handleAuth(token) {
    console.log('called back');
    this.setState({ auth: token })
  }

}

export default App
