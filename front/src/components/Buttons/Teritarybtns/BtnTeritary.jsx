import React, { Component } from 'react'
import ChevronRight from '../../../Pics/Icons/Icons/12px/Chevron-right.svg'
import './BtnTeritary.css'
export class BtnTeritary extends Component {
  render() {
    return (
   
        <div className="trtbtn">
          <div className="text">
            {this.props.title}
          </div>
          <div className="Btn-teritay-icon">
            <img src={ChevronRight}  alt="chevright" />
          </div>
        </div>
  
    )
  }
}

export default BtnTeritary