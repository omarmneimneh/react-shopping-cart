import React from "react";

const ShoppingCart = (props) => {
  return(
    <div>
      <h1>Shopping Cart</h1>
      <h2>${props.total}</h2>
    </div>
  ) 
};

export default ShoppingCart;
