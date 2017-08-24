import React, {Component} from 'react';
import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';

class CreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
      response: {
        title: '',
        headline: '',
        category: '',
        description: '',
        releaseURL: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
      <div className="container grid-sm">
        <form onSubmit={this.handleSubmit}>
          <h2>New Project</h2>
          <TextInput
            name="title"
            label="Title"
            value={this.state.response.title}
            onChange={this.handleChange}
            required
          />
          <TextInput
            name="headline"
            label="Headline"
            value={this.state.response.headline}
            onChange={this.handleChange}
            required
          />
          <SelectInput
            name="category"
            label="Category (optional)"
            value={this.state.response.category}
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
              value={this.state.response.description}
              onChange={this.handleChange}
              className="form-input"
              rows="3"
              required
            />
          </fieldset>
          <TextInput
            name="releaseURL"
            label="External URL (optional)"
            value={this.state.response.releaseURL}
            onChange={this.handleChange}
            type="url"
          />
        <button className={"btn btn-lg btn-primary centered " + (this.state.status ? "loading" : "")}  type="submit">Submit</button>
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('click');
    this.setState({ status: 'loading' });
    // fetch('/api/projects', {
    //   credentials: 'include',
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(this.state.response)
    // }).then(())
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState) => ({
      response: { ...prevState.response, [name]: value }
    }));
  }
}

export default CreatePage;
