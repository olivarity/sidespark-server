import React from 'react';
import { Link } from 'react-router-dom';

function Nav ({ auth }) {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <Link to="/" className="navbar-brand">Sidespark</Link>
      </div>
      <div className="navbar-section">
        { auth
          ? <div>
              <Link to="/create" className="btn btn-link">Create New</Link>
              <a href="/connect/logout" className="btn btn-link">Sign Out</a>
            </div>
          : <a href="/connect/slack" className="btn btn-primary btn-sm">Sign in with Slack</a>
        }
      </div>
    </nav>
  )
}

export default Nav
