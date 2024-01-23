import './HeadingBoldTwo.css'
import React, { Component } from 'react'

export class HeadingBoldTwo extends Component {
  render() {
    return (
      <div className="labelHeadingTwo">
        <div className="titleHeadingTwo">{this.props.title}</div>
      </div>
    )
  }
}

export default HeadingBoldTwo



