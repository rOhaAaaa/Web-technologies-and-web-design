import React from 'react';
import './productCard.css'; // Стилі для картки продукту

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <span className="price-label">Price: </span>
        <span className="price-amount">${product.price}</span>
      </p>
      <button>View more</button>
    </div>
  );
};

export default ProductCard;
