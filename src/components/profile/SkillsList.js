import React, {Component} from 'react'
import Skill from './Skill';

class SkillsList extends Component {
  render() {
    //console.log(this.props.dataSkills)
    const skills = this.props.dataSkills;
    return (
      <section>
        <h4>Skills</h4>
        <div className="skills-list">

          {skills.map(function(skill){
	                return <Skill data={ skill } />
	             })}
        </div>
      </section>
    )
  }
}

export default SkillsList;
