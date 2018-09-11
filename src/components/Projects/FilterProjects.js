import React, { Component } from 'react';
import Project from './Project';

class FilterProjects extends Component {
  state = {
    filter: 'all'
  };

  handleClickAll = () => {
    this.setState({
      filter: 'all'
    });
  };
  handleClickSolo = () => {
    this.setState({
      filter: 'solo'
    });
  };
  handleClickTeam = () => {
    this.setState({
      filter: 'team'
    });
  };

  renderList(projects) {
    const listFilter = projects.filter(project => {
      if ( this.state.filter === 'all') {
        return project;
      } else if(this.state.filter === 'solo'){
        if(project.solo){
          return project;
        } 
      }else {
        if (!project.solo){
          return project
        }
      }
    });
    const list = listFilter.map(element => {
      return <Project key={element.projectName} project={element} state={this.state.filter}/>;
    });

    return list;
  }
  render() {
    const projectSelectedClassVal = 'project-type--selected'
    let allSelectedRenderedClass = projectSelectedClassVal;
    let soloSelectedRenderedClass = '';
    let teamSelectedRenderedClass = '';
    if(this.state.filter === 'solo'){
      soloSelectedRenderedClass = projectSelectedClassVal;
      allSelectedRenderedClass = '';
    } else if (this.state.filter === 'team') {
      teamSelectedRenderedClass = projectSelectedClassVal;
      allSelectedRenderedClass = '';
    }

    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" onClick={this.handleClickAll} className={`project-type project-type--all ${allSelectedRenderedClass}`}>
              All
            </span>

            <span data-ptype="solo" onClick={this.handleClickSolo} className={`project-type project-type--solo ${soloSelectedRenderedClass}`}>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" onClick={this.handleClickTeam} className={`project-type project-type--team ${teamSelectedRenderedClass}`}>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

             {this.renderList(this.props.data)}

          </div>
        </section>

    );
  }
}

export default FilterProjects;