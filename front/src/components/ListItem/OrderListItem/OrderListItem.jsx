import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./OrderListItem.modules.css";

export const OrderListItme = ({
  DishName = "CheeseCake",
  Quantity = 1,
  dish_list={}


}) => {

  console.log(dish_list)
  return (
    <>
      {Object.keys(dish_list).length !== 0
      ?<>
      
        {dish_list.map((dish,i)=>
        <div className="OrderItem" >
      <div className="DishQuantity">
        {(dish+'').split(':')[0]}
       </div>

      <div className="ItemDishName">
      {(dish+'').split(':')[1]}
      </div>
      </div>)}
      </>
          :<p></p>
      }
      
      </>
  );
};

OrderListItme.propTypes = {
  Quantity: PropTypes.string,
  DishName: PropTypes.string

};


export default OrderListItme