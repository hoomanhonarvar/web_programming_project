import './HeadingBoldOne.css'
import React, { Component } from 'react'

export class HeadingBoldOne extends Component {
  render() {
    return (
      <div className="labelHeadingOne">
        <div className="titleHeadingOne">{this.props.title}</div>
      </div>
    )
  }
}

export default HeadingBoldOne



