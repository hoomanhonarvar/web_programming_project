import "./SweetAlert.css"
import React, { Component } from 'react'

export class SweetAlert extends Component {
    render(){
    return (  
        <div className="buttons-primary">
        <button type="submit"className='btnP' >
          {this.props.title}
        </button>
      </div>
    )

    }
}

export default SweetAlert;