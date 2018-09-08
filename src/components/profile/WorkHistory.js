import React, {Component} from 'react'
import Job from './Job';

class WorkHistory extends Component {
  render() {
    const jobsList = this.props.dataJob;
    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          {jobsList.map(function(item){
              return <Job data={item} />
            }) }
        </div>
      </section>
    )
  }
}

export default WorkHistory;
