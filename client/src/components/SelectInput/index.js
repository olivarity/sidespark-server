import React from 'react';

function SelectInput ({label, children, ...other }) {
  return(
    <fieldset className="form-group">
      <label className="form-label">{label}</label>
      <select className="form-select" {...other}>
        {children}
      </select>
    </fieldset>
  )
}

export default SelectInput;
