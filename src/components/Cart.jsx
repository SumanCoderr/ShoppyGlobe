// import CartItem from "./CartItem";
// import { useSelector } from "react-redux";


// function Cart(){

//     const cartItem = useSelector(store => store.product.items)
//     console.log(cartItem)

//     return(
//         <>
//         <h1>Cart Page</h1>
//         {cartItem.map(ele => <CartItem key={ele.id} cartItemDetails = {ele}/>)}



//         </>
//     )
// }

// export default Cart;

import CartItem from "./CartItem";

function Cart() {
    // Destructuring the cartItems from Redux store

    // Log to inspect cartItems

    return (
        <>
            <h1>Cart Page</h1>
            {/* Check if cartItems exists and is an array */}
                    <CartItem />
        </>
    );
}

export default Cart;
