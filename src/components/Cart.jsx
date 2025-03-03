import React from "react";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import { selectTotalItems } from "../../utils/cartSlice";
import { useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const totalItemsInCart = useSelector(selectTotalItems); //total items in cart

  const handleClearCart = () => {
    //to clear cart
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <div className="cartCard">
        {totalItemsInCart > 0 ? <CartItem /> : <p>Your cart is empty.</p>}
      </div>
      {totalItemsInCart > 0 && (
        <button onClick={handleClearCart}>Clear Cart</button>
      )}
    </div>
  );
}

export default Cart;
