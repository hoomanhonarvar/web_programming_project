import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./OrderListItem.modules.css";

export const OrderListItme = ({
  DishName = "CheeseCake",
  Quantity = 1
}) => {
  return (
    <div className="OrderItem" >
      <div className="DishQuantity">
        {Quantity}
      </div>

      <div className="ItemDishName">
        {DishName}
      </div>

    </div>
  );
};

OrderListItme.propTypes = {
  Quantity: PropTypes.string,
  DishName: PropTypes.string

};


export default OrderListItme