import React, { Component } from 'react';
import SkillsList from './profile/SkillsList';
import EducationHistory from './profile/EducationHistory';
import WorkHistory from './profile/WorkHistory';

class Profile extends Component {
    render() {
        /*console.log(this.props.sk)
        console.log(this.props.edu)
        console.log(this.props.job)*/
        return (
            <div className="profile">
                <SkillsList dataSkills={this.props.sk}/>
                <EducationHistory dataEducation={this.props.edu}/>
                <WorkHistory dataJob={this.props.job}/>
            </div>
        )
    }
}

export default Profile;