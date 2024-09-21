import React from 'react';

function ProductList({ products }) {
  return (
    <div id="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div className="product-name">{product.name}</div>
          <div className="product-category">{product.category}</div>
          <div className="product-price">${product.price}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
