import React from 'react'
import './SlideBarNav.css'
import Home from '../../../Pics/Icons/Icons/24px/Home.svg'
import Feed from '../../../Pics/Icons/Icons/24px/Feed.svg'
import Bookmark from '../../../Pics/Icons/Icons/24px/Bookmark.svg'
import Document from '../../../Pics/Icons/Icons/24px/Document.svg'
import Settings from '../../../Pics/Icons/Icons/24px/Settings.svg'

import {Link } from 'react-router-dom'

function SildeBarNav() {
  return (
    <div>
      <ul className='NavbarList'>
        <li>
          <div className="PageNameContainer">
            <Link to="/">
              <div className="PageIcon">
                <img src={Home} className='Icons' alt="" />
              </div>
              <div className="Title">
                Home
              </div>
            </Link>
          </div>
        </li>

        <li>
          <div className="PageNameContainer">
            <Link to="/explore">
              <div className="PageIcon">
                <img src={Feed} className='Icons' alt="" />
              </div>
              <div className="Title">
                Explore
              </div>
            </Link>
          </div>
        </li>


        <li>
          <div className="PageNameContainer">
            <Link to="/favourite">
              <div className="PageIcon">
                <img src={Bookmark} className='Icons' alt="" />
              </div>
              <div className="Title">
                Favourite
              </div>
            </Link>
          </div>
        </li>

        <li>
          <div className="PageNameContainer">
            <Link to="/orders">
              <div className="PageIcon">
                <img src={Document} className='Icons' alt="" />
              </div>
              <div className="Title">
                Orders
              </div>
            </Link>
          </div>
        </li>

        <li>
          <div className="PageNameContainer">
            <Link to="/settings">
              <div className="PageIcon">
                <img src={Settings} className='Icons' alt="" />

              </div>
              <div className="Title">
                Setting
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SildeBarNav