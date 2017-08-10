import React, { Component } from 'react';
import QueryString from 'query-string';
import { OAuthConstants } from '../utils/constants'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { status: "loading" };

    this.requestToken = this.requestToken.bind(this);
    this.setResult = this.setResult.bind(this);
  }

  render() {
    const status = this.state.status;
    return <h2>{status}</h2>;
  }

  componentDidMount() {
    this.requestToken();
  }

  requestToken() {
    const code = this.props.query.code;
    fetch(this.buildPath(code))
      .then(response => response.json())
      .then(result => this.setResult(result))
      .catch(e => e);
  }

  buildPath(code) {
    const keys = {
      client_id: OAuthConstants.CLIENT_ID,
      client_secret: OAuthConstants.CLIENT_SECRET,
      code: code
    };
    return OAuthConstants.PATH_NAME + QueryString.stringify(keys);
  }

  setResult(result) {
    const callback = this.props.callback;

    if(result.ok) {
      callback(result.access_token);
    } else {
      this.setState({ status: result.error });
    }
  }

}

export default Login
