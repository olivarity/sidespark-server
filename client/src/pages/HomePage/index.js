import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      message: null
    };
  }

  render() {
    const data = this.state.data;
    if(!data) return <div className="centered loading loading-lg" />;

    const tableItems = data.map(project =>
      <tr key={project._id}>
          <td>
            <Link to={'/projects/' + project._id}>
              {project.title || 'No Title'}
            </Link>
          </td>
          <td>{project.headline || 'No Headline'}</td>
      </tr>
    )
    return(
      <table className="table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableItems}
        </tbody>
      </table>
    )
  }

  componentDidMount() {
    fetch('/api/projects')
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
  }

}

export default HomePage;
