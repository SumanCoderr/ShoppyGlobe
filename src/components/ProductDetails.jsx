import React, { useEffect, useState } from "react";
import useFetch from "../../utils/useFetch";
import { useParams } from "react-router-dom";
import { addProduct } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
import "./ProductDetail.css";

function ProductDetails() {
  const { id } = useParams(); //get dynamic id from url
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const { products, loading, error } = useFetch();

  //add items in cart
  function handleAddCart(product) {
    const cartItem = {
      title: product.title,
      images: product.images,
      category: product.category,
      id: product.id,
      price: product.price,
    };

    dispatch(addProduct(cartItem));
  }

  useEffect(() => {
    if (!loading && !error) {
      const filteredProducts = products.filter((prod) => prod.id == id); //filter product based on id which is get from the url

      if (filteredProducts.length > 0) {
        setProduct(filteredProducts[0]);
      } else {
        setProduct(null);
      }
    }
  }, [id, products, loading, error]);
 
  //loading is occured when data is fetched
  if (loading) {
    return <div id="load">Loading products...</div>;
  }

  //when error occured
  if (error) {
    return <div id="error">Error: {error}</div>;
  }

  if (!product) {
    return <div id="notFound">Product not found</div>;
  }

  return (
    <div className="productDetails">
      <div className="parentDiv">
        <img src={product.images[0]} alt={product.title} />
        <div>
          <h3>{product.title}</h3>
          <h4>{product.category}</h4>
          <p>
            <b>Description : </b>
            {product.description}
          </p>
          <p>
            <b>Price : </b>
            {product.price}
          </p>
          <p>
            <b>Rating : </b>
            {product.rating}
          </p>
          <p>
            <b>Product : </b>
            {product.tags[1]}
          </p>
          <button onClick={() => handleAddCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
