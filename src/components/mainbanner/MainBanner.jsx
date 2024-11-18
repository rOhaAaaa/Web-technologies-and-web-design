import React from 'react';
import './mainbanner.css';
import productImage from '../../images/dior.jpg'; 

const MainBanner = () => {
return (
    <div className="banner-wrapper">
    <div className="image-wrapper">
        <img src={productImage} alt="Product" />
    </div>
    <div className="text-wrapper">
        <h1 className="banner-heading">Discover Your Beauty</h1>
        <p className="banner-description">
        Luxurious cosmetics to enhance your natural glow. Experience the finest collection of beauty 
        products crafted with care, designed to inspire confidence and elevate your natural radiance.
        Whether you're looking for the perfect foundation, a bold lipstick, or the latest in skincare, 
        our selection is curated to meet the needs of every individual. Let your true beauty shine with
        products that not only look good but feel great on your skin. Explore our range and find the perfect 
        fit for your style and personality.
        </p>
    </div>
    </div>
);
};

export default MainBanner;
