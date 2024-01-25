import './BtnPrimary.css'
import React, { Component } from 'react'

export class BtnPrimary extends Component {
  render() {
    return (
      <div className="buttons-primary">
        <button type="submit"className='btnP' disabled={this.props.dis}>
          {this.props.title}
        </button>
      </div>
    )
  }
}


export default BtnPrimary
