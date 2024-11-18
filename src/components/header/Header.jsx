import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../images/logo.webp'; 

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="text-logo">Cosmetics Store</div> 
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li>Cart</li>
        </ul>
      </nav>
      <div className="logo">
        <img src={logo} alt="Cosmetics Store Logo" className="logo-image" /> 
      </div>
    </header>
  );
};

export default Header;
