import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <Link to="/discover" className="btn btn-link">Discover</Link>
      </div>
      <div className="navbar-center">
        <Link to="/" className="navbar-brand mr-10">Sidespark</Link>
      </div>
      <div className="navbar-section">
        <a href="https://sidespark.slack.com/oauth/authorize?scope=identity.basic,identity.email,identity.avatar&client_id=***REMOVED***"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
      </div>
    </nav>
  )
}

export default Nav
