import React from 'react';

function TextInput ({ label, type="text", ...other }) {
  return(
    <fieldset className="form-group">
      <label className="form-label ">{label}</label>
      <input className="form-input" type={type} {...other} />
    </fieldset>
  )
}

export default TextInput;
