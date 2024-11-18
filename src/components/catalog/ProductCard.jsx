import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="product-price"><strong>Price:</strong> <span className="price-value">${product.price}</span></p> 
      <Link to={`/catalog/${product.id}`}>
        <button>View more</button>
      </Link>
    </div>
  );
};

export default ProductCard;
