import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../utils/cartSlice";

function Header() {
  const totalItems = useSelector(selectTotalItems); //Total itms in cart

  return (
    <div className="container">
      <Link to={"/"}>
        <img
          id="img"
          src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg?t=st=1739561875~exp=1739565475~hmac=a4c0169b6ca99f09040a88f7b08d1dbd0256114e6f99df898ae855969529baa8&w=1060"
          alt="Product Display Logo"
        />
      </Link>

      <ul className="navItem">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>

        <Link to={"/productlist"} style={{ textDecoration: "none" }}>
          <li>All Products</li>
        </Link>

        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          <li>
            Cart
            {totalItems > 0 && (
              <span className="cart-count">({totalItems})</span>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
