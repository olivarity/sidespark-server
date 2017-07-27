import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav () {
  return (
    <ul className="Nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/discover">Discover</Link></li>
      <li className="login"><Link to="/login">Sign In</Link></li>
    </ul>
  )
}

export default Nav
