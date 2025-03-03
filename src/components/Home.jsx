import "./Header.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome To Our Shop</h1>
      <p>Don't Delivery A Product, delivery An Experience.</p>
      <p>Your Trust, Our Responsibility.</p>
      <Link to="/productlist" style={{ textDecoration: "none" }}>
        <button>Our Products</button>
      </Link>
    </div>
  );
}

export default Home;
