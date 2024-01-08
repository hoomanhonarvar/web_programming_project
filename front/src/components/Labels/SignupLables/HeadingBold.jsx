import './Header.css'
import React, { Component } from 'react'

export class HeadingBold extends Component {
  render() {
    return (
      <div className="labelHeading">
        <div className="titleHeading">{this.props.title}</div>
      </div>
    )
  }
}

export default HeadingBold



