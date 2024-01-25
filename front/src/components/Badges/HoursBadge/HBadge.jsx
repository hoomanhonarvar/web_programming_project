import React, { Component } from 'react'
import './HBadge.modules.css' 

export class HBadge extends Component {
  render() {
    return (
      <div className="HoursBadge">
        <p>{this.props.title}</p>
      </div>
    )
  }
}


export default HBadge