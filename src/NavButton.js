import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavButton.css'

function NavButton (props) {
  return (
    <div className={'NavButton ' + props.className}>
      <NavLink to={props.to}>
          {props.display}
      </NavLink>
    </div>
  );
}


export default NavButton
