import React, { Component } from 'react'
import './DBadge.modules.css' 

export class DBadge extends Component {
  render() {
    return (
      <div className="DeliveryBadge">
        <p>{this.props.title}</p>
      </div>
    )
  }
}


export default DBadge