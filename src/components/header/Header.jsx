import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header-wrapper">
      <div className="logo">Cosmetics Store</div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li>Cart</li>
        </ul>
      </nav>
      {location.pathname === '/catalog' && (
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <span className="search-icon">&#128269;</span>
        </div>
      )}
    </header>
  );
};

export default Header;
