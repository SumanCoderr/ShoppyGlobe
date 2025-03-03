import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import "./ProductDetail.css";


function CheckOut(){


const {id} = useParams()
const cartItems = useSelector(state => state.product.items);
const filtereItem = cartItems.find((item) => item.id === parseInt(id))
const totalPrice = filtereItem.quantity * filtereItem.price // calculate total price of a product


    return(
        <>
        <div className="productDetails">
        <div className="parentDiv">
          <img src={filtereItem.images[0]} alt={filtereItem.title} />
          <div>
          <h3>{filtereItem.title}</h3>
          <h4>{filtereItem.category}</h4>
          <p><b>Price : </b>{filtereItem.price}</p>
          <p><b>Quantity : </b>{filtereItem.quantity}</p>
          <p><b>Total Price : </b>{totalPrice}</p>
          <Link to="/">
          <button >Purchase</button>
          </Link>
          </div>
        </div>
      </div>
        </>
    )
}

export default CheckOut
