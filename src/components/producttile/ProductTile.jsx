import React from 'react';
import './producttile.css'; 

const ProductTile = ({ title, description, image }) => {
return (
    <div className="tile-wrapper">
    <div className="tile-image" style={{ backgroundImage: `url(${image})` }} />
    <h2 className="tile-title">{title}</h2>
    <p className="tile-description">{description}</p>
    </div>
);
};

export default ProductTile;
