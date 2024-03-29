import React from 'react'
import './SlideBarNav.css'

import Home from '../../../Pics/Icons/Icons/24px/Home.svg'
import Feed from '../../../Pics/Icons/Icons/24px/Feed.svg'
import Bookmark from '../../../Pics/Icons/Icons/24px/Bookmark.svg'
import Document from '../../../Pics/Icons/Icons/24px/Document.svg'
import Settings from '../../../Pics/Icons/Icons/24px/Settings.svg'
import useLogout from '../../../hooks/useLogout'
import {Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
function SildeBarNav() {
  const{auth}=useAuth();
  const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
      
        await logout();
        localStorage.setItem('email', "");
      localStorage.setItem('pwd',"");
        localStorage.setItem('persist',false);
        navigate('/');
        
    }
    const signIn=()=>{
      navigate('login');
    }
    console.log(auth);
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




        <li>
          <div className="PageNameContainer">
            {/* <Link to="/favourite">
              <div className="PageIcon">
                <img src={Bookmark} className='Icons' alt="" />
              </div>
              <div className="Title">
                Favourite
              </div>
            </Link> */}
            {
              
              Object.keys(auth).length !== 0
              ?<button className = "hooman_button"onClick={signOut}>Sign Out</button>
              :<button className = "hooman_button_1" onClick={signIn}>Sign In</button>
            }
            

          </div>
        </li>



      </ul>
    </div>
  )
}

export default SildeBarNav