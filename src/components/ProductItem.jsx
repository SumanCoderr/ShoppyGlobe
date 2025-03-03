import "./productItem.css";
import { addProduct } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const dispatch = useDispatch();
  const { title, category, images, id, price } = props.productDetails; //destructuring

  //Add item in cart
  function handleAddCart() {
    const cartItem = {
      title,
      images,
      category,
      id,
      price
    };

    dispatch(addProduct(cartItem)); //reducer function call and update cart
  }

  return (
    <div className="productCard">
      <img src={images[0]} alt="" />
      <div>
        <h3>{title}</h3>
        <h4>{category}</h4>
        <h4><b>Price : </b>{price}</h4>
      </div>

      <button onClick={() => handleAddCart(props)}>Add To Cart</button>
      <Link to={`/productdetails/${id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductItem;
