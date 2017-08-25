import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import '../spectre.min.css';

import Nav from '../components/Nav';
import CreatePage from '../pages/CreatePage';
import ProjectPage from '../pages/ProjectPage';


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
        <div className="container p-0 grid-lg">
          <Nav auth={this.state.auth} />
          <div className="container grid-md">
            <Route exact path="/" render={() =>
              auth
              ? <h1>You are signed in as {auth.name}</h1>
              : <h1>Welcome! Please sign in.</h1>
            } />
            <Route path="/create" render={() =>
              auth
              ? <CreatePage />
              : <Redirect to="/" />
            } />
            <Route path="/projects/:id" component={ProjectPage} />
          </div>
        </div>
      </Router>
    );
  }

}

export default App
