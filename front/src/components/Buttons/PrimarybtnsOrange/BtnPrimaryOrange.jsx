import './BtnPrimaryOrange.modules.css'
import React, { Component } from 'react'

export class BtnPrimaryOrange extends Component {
  render() {
    return (
      <div className="buttons-primary-orange">
      <button className='btnPO'>
      {this.props.title}
      </button>
      </div>
    )
  }
}

export default BtnPrimaryOrange
