import './BtnSecondary.css'
import React, { Component } from 'react'

export class BtnSecondary extends Component {
  render() {
    return (
      <div className="buttons-secondary">
      <div className="text">{this.props.title}</div>
      </div>
    )
  }
}

export default  BtnSecondary
