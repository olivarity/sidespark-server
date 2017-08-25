import React, { Component } from 'react';
import './index.css';

class ProjectPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: null,
        error: null
      };
    }

    componentDidMount() {
      const id = this.props.id;
      const path = '/api/projects/' + id;
      fetch(path)
        .then(response => response.json())
        .then(result => this.setState({data: result}));
    }

    render() {
      const data = this.state.data;
      const error = this.state.error;
      const user = this.props.auth;

      if(!error){
        return(
          data
          ? <div className="container grid-sm project-page">
              <header>
                <h1>{data.title || 'No title'}</h1>
                <h2>{data.headline || null}</h2>
              </header>
              <blockquote className="col-10 col-xs-12 text-justify centered">
                {data.description || 'No description given'}
              </blockquote>
              <p>
                <strong>
                  Created by: {
                    data.contributors
                        .map(item => item.name)
                        .join(', ')
                  }
                </strong>
              </p>
              <div className="column col-4 col-xs-6 centered">
                <a
                  target="_blank"
                  href={data.releaseURL || null}
                  className={'btn btn-primary m-1 centered ' + (data.releaseURL ? null : 'disabled')}
                >
                  Website
                </a>
                <a
                  href={'slack://user?team=T65TJGA5D&id=' + data.creator._id}
                  className={'btn btn-primary m-1 centered ' + (user ? null: 'd-none')}
                >
                  Send Message
                </a>
              </div>
            </div>
          : <div className="centered loading loading-lg" />
        )
      }
      return <h2>Error</h2>;
    }
}

export default ProjectPage;
