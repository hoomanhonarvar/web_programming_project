import './BtnSecondary.css'
import React, { Component } from 'react'

export class BtnSecondary extends Component {
  render() {
    return (
      <div className="buttons-secondary">
        <button className='btnS'>
        {this.props.title}
        </button>
      </div>
    )
  }
}

export default  BtnSecondary
