import "./productItem.css";
import { addProduct } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

function ProductItem(props){

    const dispatch = useDispatch()
    const{title, category, images, id } = props.productDetails
    function handleAddCart(){
        const cartItem ={
            title, images, category, id
        }

        dispatch(addProduct(cartItem))
    }

    return(
        <div className="productCard">
            <img src={images[0]} alt="" />
            <div>
                <h3>{title}</h3>
                <h4>{category}</h4>
            </div>

            <button onClick={()=> handleAddCart(props)}>Add To Cart</button>
        </div>
    )
}

export default ProductItem