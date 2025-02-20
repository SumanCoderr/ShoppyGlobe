// function CartItem(props){

// console.log(props.key)
// const { title, category} = props.cartItemDetails
//     return(
//         <>
//         <img src={images} alt="productImage" />
//         <div>{title}</div>
//         </>
//     )
// }

// export default CartItem;


import { useSelector } from "react-redux";

function CartItem() {

    const cartItems = useSelector(store => store.product.items);
    console.log(cartItems)

    // Destructuring cartItemDetails and ensuring we get title and category
    // const { title, category, image } = props.cartItemDetails;

    // Log the props to check

    return (
        <>
            {/* Assuming image is part of cartItemDetails, use it to display the product image */}
            {/* <img src={image} alt={`${title} product`} />
            <div>{title}</div>
            <div>{category}</div> */}

            {cartItems.map(item =>  {
                return(
                    <img src={item.images[0]} alt="" />
                )
            }
            
            )}
            
        </>
    );
}

export default CartItem;
