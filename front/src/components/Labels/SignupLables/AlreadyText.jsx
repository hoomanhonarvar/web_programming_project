import React, { Component } from 'react'
import './AlreadyText.css'

export class AlreadyText extends Component {
  
  render() {
    
    return (
      <div className="Alreadylabel">
        <p className="sign-in-button">
          <span className="text-wrapper">{this.props.title}</span>
          <span className="span">&nbsp;</span>
          <span className="text-wrapper-2">{this.props.id}</span>
        </p>
      </div>

    )
  }
}

export default AlreadyText