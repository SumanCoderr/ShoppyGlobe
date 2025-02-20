// import "./Header.css";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Header() {
// const cartItems = useSelector(store => store.Product.items)

//   return (
//     <div className="container">
//       <Link to={"/"}>
//         <img
//           src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?t=st=1739561875~exp=1739565475~hmac=a4c0169b6ca99f09040a88f7b08d1dbd0256114e6f99df898ae855969529baa8&w=1060"
//           alt="logo"
//         />
//       </Link>

//       <ul className="navItem">
//         <li>
//           <Link to={"/"} style={{ textDecoration: "none" }}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to={"/cart"} style={{ textDecoration: "none" }}>
//             Cart
//             {cartItems.length}
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Header;

import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Header() {
  // Get the cart items from the Redux store
  const cartItems = useSelector((state) => state.product.items);

  return (
    <div className="container">
      {/* Link to the homepage with a meaningful alt text for the logo */}
      <Link to={"/"}>
        <img
          src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?t=st=1739561875~exp=1739565475~hmac=a4c0169b6ca99f09040a88f7b08d1dbd0256114e6f99df898ae855969529baa8&w=1060"
          alt="Product Display Logo" // Improved alt text for accessibility
        />
      </Link>

      <ul className="navItem">
        {/* Link to Home */}
        <li>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        
        {/* Link to Cart with item count */}
        <li>
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            Cart
            {cartItems.length > 0 && (
              <span className="cart-count">({cartItems.length})</span> // Display count in parentheses
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
