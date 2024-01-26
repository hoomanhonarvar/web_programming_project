import './BtnSecondaryOrange.modules.css'
import React, { Component } from 'react'

export class BtnSecondaryOrange extends Component {
  render() {
    return (
      <div className="buttons-secondary-orange">
        <button className='btnSO'>
          {this.props.title}
        </button>
      </div>
    )
  }
}

export default BtnSecondaryOrange
