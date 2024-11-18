import React from 'react';
import './header.css'; 
import logoImage from '../../images/logo.webp';


const Header = () => {
return (
    <header className="header-wrapper">
    <div className="logo">Cosmetics Store</div>

    <div className="center-logo">
        <img src={logoImage} alt="Logo" />
    </div>

    <nav className="nav">
        <ul>
        <li>Home</li>
        <li>Catalog</li>
        <li>Cart</li>
        </ul>
    </nav>
    </header>
);
};

export default Header;
