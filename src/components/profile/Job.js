
import React, {Component} from 'react'

class Job extends Component {
  render() {
    const job = this.props.data;
    return (
      <div className="job">
    <div className="job__years">
      <h6 className="job__end">{job.years.end}</h6>
      <h6 className="job__start">{job.years.start}</h6>
    </div>
    <h5 className="job__title">{job.title}</h5>
    <h5 className="job__company">{job.company}</h5>
    <p className="job__description">{job.description}</p>
  </div>
    );
  }
}

export default Job
