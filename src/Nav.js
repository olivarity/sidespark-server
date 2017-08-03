import React from 'react';
import { Link } from 'react-router-dom';
import './spectre.min.css'

function Nav () {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <Link to="/discover" className="btn btn-link">Discover</Link>
        <Link to="/create" className="btn btn-link">Create</Link>
      </div>
      <div className="navbar-center">
        <Link to="/" className="navbar-brand mr-10">Sidespark</Link>
      </div>
      <div className="navbar-section">
        <Link to="/login" className="btn btn-sm btn-primary">Sign In</Link>
      </div>
    </nav>
  )
}

export default Nav
