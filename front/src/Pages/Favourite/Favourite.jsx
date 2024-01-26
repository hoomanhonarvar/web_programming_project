import React from 'react'
import './Favourite.css'
import Navbar from '../../components/Navbar/Navbar'
import UpdatePersonalInfo from '../../components/Cards/UpdatePersonalInfo/UpdatePersonalInfo'
import FavNav from '../../components/Navbar/FavoriteNav/FavNav'
import { Route, Routes } from 'react-router-dom'
import RestFav from '../../components/Favs/RestFav/RestFav'
import DishFav from '../../components/Favs/DishFav/DishFav'
import SildeBar from '../../components/SildeBar/SildeBar'
function Favourite() {
  return (<div className='main_fav'>
    <SildeBar/>
    <div className='FavouritePage'>
      {/* sildeBar */}
      {/* MainPart
      // Restaurants
      // Dishes
      
      */}
      

     
      {/* <UpdatePersonalInfo/> */}
      <div className="FavoriteSectionNav">
      <Navbar />
        <FavNav />


        <div className="FavContainer">
          <Routes>
            <Route path='/RestFav' element={<RestFav />} />
            <Route path='/DishFav' element={<DishFav />} />
          </Routes>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Favourite