import React, {Component} from 'react'

class EduTitle extends Component {
  
  render() {
    let edu= this.props.data
    return (
      <div className="degree">
       <h5 className="degree__institute">{edu.institute} </h5>
       <p className="degree__field">{edu.fieldOfStudy}</p>
       <p className="degree__dates">{edu.dates}</p>
     </div>
    );
  }
}

export default EduTitle
