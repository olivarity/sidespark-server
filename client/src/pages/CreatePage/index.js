import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';

class CreatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      result: null,
      request: {
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
      this.state.result
      ? <Redirect to={"/projects/" + this.state.result} />
      : <div className="container grid-sm">
          <form onSubmit={this.handleSubmit}>
            <h2>New Project</h2>
            <TextInput
              name="title"
              label="Title"
              value={this.state.request.title}
              onChange={this.handleChange}
              required
            />
            <TextInput
              name="headline"
              label="Headline"
              value={this.state.request.headline}
              onChange={this.handleChange}
              required
            />
            <SelectInput
              name="category"
              label="Category (optional)"
              value={this.state.request.category}
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
                value={this.state.request.description}
                onChange={this.handleChange}
                className="form-input"
                rows="3"
                required
              />
            </fieldset>
            <TextInput
              name="releaseURL"
              label="External URL (optional)"
              value={this.state.request.releaseURL}
              onChange={this.handleChange}
              type="url"
            />
          <button className={"btn btn-lg btn-primary centered " + (this.state.loading ? "loading" : "")}  type="submit">Submit</button>
          </form>
        </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true });
    fetch('/api/projects', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.request)
    }).then(res => res.text())
      .then(body => this.setState({ result: body, loading: false }));
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState) => ({
      request: { ...prevState.request, [name]: value }
    }));
  }
}

export default CreatePage;
