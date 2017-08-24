import React from 'react';

function CreatePage () {
  return (
    <form className="col-8 centered">
      <h2>New Project</h2>
      <fieldset className="form-group">
        <label className="form-label " for="input-example-1">Project Title</label>
        <input className="form-input" type="text" id="input-example-1" placeholder="Sidespark" />
      </fieldset>
      <fieldset className="form-group">
        <label className="form-label" for="input-example-1">Headline</label>
        <input className="form-input" type="text" id="input-example-1" placeholder="It does a thing" maxLength="50"/>
      </fieldset>
      <fieldset className="form-group">
        <label className="form-label" for="input-example-1">Category (optional)</label>
        <select className="form-select">
         <option selected value="">None</option>
         <option>Media</option>
         <option>Social Impact</option>
         <option>Software and Technology</option>
        </select>
      </fieldset>
      <fieldset className="form-group">
        <label className="form-label" for="input-example-1">Description</label>
        <textarea className="form-input" id="input-example-1"  rows="3" />
      </fieldset>
      <fieldset className="form-group">
        <label className="form-label" for="input-example-1">External URL (optional)</label>
        <input className="form-input" type="text" id="input-example-1" placeholder="Sidespark" />
      </fieldset>
      <button className="btn btn-primary float-right">Submit</button>
    </form>
  )
}

export default CreatePage;
