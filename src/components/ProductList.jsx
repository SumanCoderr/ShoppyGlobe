// import useFetch from './useFetch';
import useFetch from "../../utils/useFetch";
import ProductItem from "./ProductItem";
import  "./productItem.css";

const ProductList = () => {
  const { products, loading, error } = useFetch();

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {/* <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width={100} />
          </li>
        ))}
      </ul> */}
      <div className="productList">
      {products.map(product => <ProductItem key = {product.id} productDetails = {product}/>)}
      </div>

    </div>
  );
};

export const {products} = ProductList;

export default ProductList;