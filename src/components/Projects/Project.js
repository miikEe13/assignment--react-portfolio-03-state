import React, { Component } from 'react';

class Project extends Component {

  render() {
    const theProjectName = this.props.project.projectName;

    const soloProjectClassName = 'project--solo';
    const teamProjectClassName = 'project--team';

    let renderedClassVal = soloProjectClassName;

    if(this.props.state === 'team'){
      renderedClassVal = teamProjectClassName;
    }
    if(this.props.state === 'all'){
        if(this.props.project.solo === true){
          renderedClassVal = soloProjectClassName;
        } else {
          renderedClassVal = teamProjectClassName;
        }
    }
    return (
       <div className={`project ${renderedClassVal}`}>
        <span className="project__title">{theProjectName}</span>
      </div>
    );
  }
}

export default Project;
