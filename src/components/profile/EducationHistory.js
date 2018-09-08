import React, {Component} from 'react'
import EduTitle from './EduTitle';

class EducationHistory extends Component {
  render() {

    //console.log(this.props.dataEducation)
    let eduList = this.props.dataEducation;
    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          { eduList.map(function( item ) {
                  return <EduTitle data={ item } />
                }) }

        </div>
      </section>
    )
  }
}

export default EducationHistory;
