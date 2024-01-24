import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './AlreadyText.css'

export class AlreadyText extends Component {
  
  render() {
    
    return (
      <div className="Alreadylabel">
        <div className="sign-in-button">
          <Link to={this.props.Link}>
          <span className="text-wrapper">{this.props.title}</span>
        </Link>
          <span className="span">&nbsp;</span>
<Link to={this.props.Link}>
          <span  className="text-wrapper-2">{this.props.id}</span> 

</Link>


        </div>
      </div>

    )
  }
}

export default AlreadyText