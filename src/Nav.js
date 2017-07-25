import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav () {
  return(
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/discover">Discover</NavLink>
      <NavLink to="/login">Sign In</NavLink>
    </nav>
  )
}

export default Nav;
