import React from "react";
function ProductCard({ productName, price }) {
  return (
    <div className="product-card">
      <h3>{productName}</h3>
      <p>Price: {price}</p>
    </div>
  );
}

export default ProductCard;