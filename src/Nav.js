import React from 'react';
import NavButton from './NavButton.js'
import './Nav.css';

function Nav () {

  return(
    <nav className="Nav">
      <NavButton display="Home" to="/" />
      <NavButton display="Discover" to="/discover" />
      <NavButton className="login" display="Sign In" to="/login" />
    </nav>
  );
}

export default Nav
