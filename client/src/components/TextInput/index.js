import React from 'react';

function TextInput ({ name, label, value, onChange }) {
  return(
    <fieldset className="form-group">
      <label className="form-label ">{label}</label>
      <input
        name={name}
        className="form-input"
        type="text" value={value}
        onChange={onChange}
      />
    </fieldset>
  )
}

export default TextInput;
