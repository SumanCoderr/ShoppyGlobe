import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct, updateProductQuantity } from "../../utils/cartSlice";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((store) => store.product.items); //update ui using useSlector

  const dispatch = useDispatch();

  //remove item from cart
  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  //update items quantity in cart
  const handleQuantityChange = (id, quantity) => {
    dispatch(updateProductQuantity({ id, quantity }));
  };

  return (
    <div className="singleCard">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.images[0]} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.category}</p>
          <h4>
            <b>Price : </b>
            {item.price * item.quantity}
          </h4>
          <div>
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity - 1)} //to decreament product quantity in cart
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, item.quantity + 1)} //to inreament product quantity in cart
            >
              +
            </button>
          </div>
          <button onClick={() => handleRemove(item.id)}>Remove</button>{" "}
          {/*remove product from cart*/}
          <Link to={`/checkout/${item.id}`}>
            <button>CheckOut</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cart;
