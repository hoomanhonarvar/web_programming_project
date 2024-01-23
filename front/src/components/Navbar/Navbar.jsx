import React from 'react'
import LocationIcon from '../../Pics/Icons/Icons/24px/Location.svg'
import Options from '../../Pics/Icons/Icons/16px/Options.svg'
import Bag from '../../Pics/Icons/Icons/24px/Shopping-bag.svg'
import Coupon from '../../Pics/Icons/Icons/24px/Coupon.svg'
import './Navbar.css'
import OptionBox from './OptionBox/OptionBox'
import BtnIcon from '../Buttons/IconBtns/BtnIcon'
import filter from '../../Pics/Icons/Icons/20px/Filter.svg'
import ShoppingCart from '../../Pics/Icons/Icons/20px/Shopping-cart.svg'
import SearchField from '../SearchField/SearchField'
function Navbar() {

  return (
    <div className='NavBarDesktop'>
      {/* location */}
      <OptionBox Icon={LocationIcon} />
      {/* PickUP? */}
      <OptionBox
        TextMain="Pick up"
        Icon={Bag}
      />


      {/* Best Deals */}
      <OptionBox
        TextMain="Best Deals"
        Icon={Coupon}
      />
      {/* Search field */}
      <SearchField/>
      {/* Filter */}
      <BtnIcon
        Icon={filter}
      />

      {/* Cart */}

      <BtnIcon
        Icon={ShoppingCart}
        bgColor='#FB6D3A'
      />
    </div>
  )
}

export default Navbar