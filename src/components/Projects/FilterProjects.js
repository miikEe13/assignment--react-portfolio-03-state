import React, { Component } from 'react';
import Project from './Project';

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`
       you will want to map to an array of <Project/> components


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state to the selected
        view,

        Note: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() to render the `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() depending on the  then .map()


 */

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

    // Primero creamos la lista de list items
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
    console.log(listFilter)
    const list = listFilter.map(element => {
      return <Project key={element.projectName} project={element} />;
    });

    // Luego regresamos esa lista
    return list;
  }
  render() {
    console.log(this.state);
    const projectSelectedClassVal = 'project-type--selected'

    let allSelectedRenderedClass = projectSelectedClassVal
    let soloSelectedRenderedClass = ''
    let teamSelectedRenderedClass = ''

    // change value of 'let' variables based on component state for whether
    //'all', 'team', or 'solo' is selected
    // --
    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" onClick={this.handleClickAll} className={`project-type project-type--all ${allSelectedRenderedClass}`}>
              All
            </span>

            <span data-ptype="solo" onClick={this.handleClickSolo} className={`project-type project-type--solo ${soloSelectedRenderedClass}}`}>
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