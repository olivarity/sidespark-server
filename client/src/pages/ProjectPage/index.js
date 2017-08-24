import React, { Component } from 'react';

class ProjectPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }

    componentDidMount() {
      const id = this.props.match.params.id;
      const path = '/api/projects/' + id;
      fetch(path)
        .then(response => response.json())
        .then(result => this.setState({data: result}));
    }

    render() {
      const data = this.state.data;
      return(
        data
        ? <div>
            <h2>{data.title}</h2>
            <p>{data.headline}</p>
            <p>Created by {data.creator.name}</p>
            <p>{data.description}</p>
            {data.releaseURL ? <a href={data.releaseURL} className="btn btn-primary">See More</a> : null }
          </div>
        : <div className="centered loading loading-lg" />
      )
    }
}

export default ProjectPage;
