import React from 'react';
import { Link } from 'react-router-dom';
import './producttile.css';

const ProductTile = ({ id, title, description, image }) => {
    return (
        <div className="tile-wrapper">
            <div className="tile-image" style={{ backgroundImage: `url(${image})` }} />
            <h2 className="tile-title">{title}</h2>
            <p className="tile-description">{description}</p>
            <Link to={`/catalog/${id}`} className="view-more-link">
                <button className="view-more-button">View more</button>
            </Link>
        </div>
    );
};

export default ProductTile;
