import './BodyText.css'
import React, { Component } from 'react'

export class BodyText extends Component {
  render() {
    return (
          <div className="labelBody">
  <p className="body-text">{this.props.title}</p>
    </div>
    )
  }
}

export default BodyText