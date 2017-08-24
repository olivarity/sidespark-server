import React from 'react';

function SelectInput ({ name, label, value, onChange, children}) {
  return(
    <fieldset className="form-group">
      <label className="form-label">{label}</label>
      <select name={name} value={value} onChange={onChange} className="form-select">
        {children}
      </select>
    </fieldset>
  )
}

export default SelectInput;
