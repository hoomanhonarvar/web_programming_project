import React from 'react'
import './SearchField.css'
import Search from '../../Pics/Icons/Icons/20px/Search.svg'
function SearchField() {
  return (
    <div className='SerchBox'>
      <div className="SearchIcon">
        <img src={Search} alt="SearchIcon" />
      </div>
      <div className="SearchInput">
      <input type="text" name="" id="" className="Sinp"  placeholder='Search for anything…'/>
      </div>

    </div>
  )
}

export default SearchField