import './SettingBody.modules.css'
import React, { Component } from 'react'

export class SettingBodyText extends Component {
  render() {
    return (
          <div className="labelBody">
  <p className="Setting-body-text">{this.props.title}</p>
    </div>
    )
  }
}

export default SettingBodyText