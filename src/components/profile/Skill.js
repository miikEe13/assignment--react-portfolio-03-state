import React, {Component} from 'react'

class Skill extends Component {
  render() {
    return (
      <span className="skills-list__single">
        {this.props.data}
      </span>
    );
  }
}

export default Skill
