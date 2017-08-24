import React, {Component} from 'react';
import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';

class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      title: '',
      headline: '',
      category: '',
      description: '',
      releaseURL: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return(
      <div className="container grid-sm">
        <form>
          <h2>New Project</h2>
          <TextInput
            name="title"
            label="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <TextInput
            name="headline"
            label="Headline"
            value={this.state.headline}
            onChange={this.handleChange}
          />
          <SelectInput
            name="category"
            label="Category (optional)"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="">None</option>
            <option>Media</option>
            <option>Social Impact</option>
            <option>Software and Technology</option>
          </SelectInput>
          <fieldset className="form-group">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              className="form-input"
              rows="3"/>
          </fieldset>
          <TextInput
            name="releaseURL"
            label="External URL (optional)"
            value={this.state.releaseURL}
            onChange={this.handleChange}
          />
        <button className="btn btn-lg btn-primary centered" onClick={this.handleSubmitClick}>Submit</button>
        </form>
      </div>
    );
  }

  handleSubmitClick(e) {
    console.log(e)
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    console.log(e);
    this.setState({ [name]: value });
  }
}

export default CreatePage;
