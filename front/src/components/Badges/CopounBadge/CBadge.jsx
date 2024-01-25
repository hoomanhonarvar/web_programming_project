import React, { Component } from 'react'
import './CBadge.modules.css' 

export class CBadge extends Component {
  render() {
    return (
      <div className="CopounBadge">
        <p>{this.props.title}</p>
      </div>
    )
  }
}


export default CBadge