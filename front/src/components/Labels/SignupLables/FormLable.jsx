import React, { Component } from 'react'
import './FormLable.css'
export class FormLable extends Component {
  render() {
    return (
      <div className="labelForm">
        <div className="titleForm"> {this.props.title}</div>
      </div>
    )
  }
}

export default FormLable