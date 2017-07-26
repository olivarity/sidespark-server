import React from 'react';
import { NavLink } from 'react-router-dom';

function NavButton (props) {
  return (
    <NavLink to={props.to}>
      <div>
        {props.display}
      </div>
    </NavLink>
  );
}

export default NavButton
