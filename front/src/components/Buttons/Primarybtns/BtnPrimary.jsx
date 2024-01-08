import './BtnPrimary.css'
import React, { Component } from 'react'

export class BtnPrimary extends Component {
  render() {
    return (
      <div className="buttons-primary">
      <div className="text">{this.props.title}</div>
      </div>
    )
  }
}

export default BtnPrimary
