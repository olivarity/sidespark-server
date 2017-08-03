import React from 'react';
import { Link } from 'react-router-dom';
import './spectre.min.css'

function Nav () {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <Link to="/discover" className="btn btn-link">Discover</Link>
        <Link to="/create" className="btn btn-link">Create</Link>
      </section>
      <section className="navbar-center">
        <Link to="/" className="navbar-brand mr-10">Sidespark</Link>
      </section>
      <section className="navbar-section">
        <Link to="/login" className="btn btn-sm btn-primary">Sign In</Link>
      </section>
    </header>
  )
}

export default Nav
