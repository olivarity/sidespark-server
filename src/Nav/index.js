import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav ({ auth }) {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <Link to="/discover" className="btn btn-link">Discover</Link>
      </div>
      <div className="navbar-center">
        <Link to="/" className="navbar-brand mr-10">Sidespark</Link>
      </div>
      <div className="navbar-section">
        { auth
          ? <Link to="create" className="btn btn-sm btn-primary">+</Link>
          : <NavLink to="/login" className="btn btn-sm btn-primary" activeClassName="hide">Sign In</NavLink>
        }
      </div>
    </nav>
  )
}

export default Nav
