import React, { useState } from "react";
import useFetch from "../../utils/useFetch";
import ProductItem from "./ProductItem";
import "./productItem.css";

const ProductList = () => {
  const { products, loading, error } = useFetch();
  const [search, setSearch] = useState(""); //search state management

  if (loading) {
    return <div id="load">Loading products...</div>;
  }

  if (error) {
    return <div id="error">Error: {error}</div>;
  }

  //filter for search
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  //search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="productList">
      <h1>All Products</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search Item"
      />

      <div className="item">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} productDetails={product} />
          ))
        ) : (
          <p id="load">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
