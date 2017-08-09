import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import QueryString from 'query-string';
import { OAuthConstants } from '../utils/constants'
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
          <Route path="/slack/auth" render={({ location }) =>
            this.state.auth || this.handleAuth(QueryString.parse(location.search))
              ? <Redirect to="/" />
              : <p>Error</p>
          } />
        </div>
      </Router>
    );
  }

  handleAuth(query) {
    const keys = {
      client_id: OAuthConstants.CLIENT_ID,
      client_secret: OAuthConstants.ClIENT_SECRET,
      code: query.code
    };
    const path = OAuthConstants.PATH_NAME + QueryString.stringify(keys);
    console.log(path);
    return false;
  }

}

export default App
