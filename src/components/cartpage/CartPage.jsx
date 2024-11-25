import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementItem, decrementItem } from '../../redux/actions';
import './CartPage.css';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector(state => state.cart); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));  
  }, [cart]);

  const handleRemove = (uniqueProductId) => {
    dispatch(removeFromCart(uniqueProductId));
    setError(''); 
  };

  const handleQuantityChange = (uniqueProductId, operation) => {
    const product = cart.find(item => item.uniqueProductId === uniqueProductId);
    if (operation === 'increment') {
      if (product.quantity < 10) {  
        dispatch(incrementItem(uniqueProductId));
        setError(''); 
      } else {
        setError('Cannot add more than 10 items of this product.');
      }
    } else if (operation === 'decrement') {
      dispatch(decrementItem(uniqueProductId));
      setError(''); 
    }
  };

  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {error && <div className="error-message">{error}</div>} 
      <div className="cart-items">
        {cart.map(product => (
          <div key={product.uniqueProductId} className="cart-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <p>Option: {product.option}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(product.uniqueProductId, 'decrement')}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => handleQuantityChange(product.uniqueProductId, 'increment')}>+</button>
            </div>
            <button onClick={() => handleRemove(product.uniqueProductId)} className="remove-button">Remove</button>
          </div>
        ))}
      </div>
      <div className="total-amount">
        <h3>Total amount: ${totalAmount}</h3>
      </div>
      <div className="actions">
        <button className="back-button" onClick={() => navigate('/catalog')}>Back to Catalog</button>
        <button className="continue-button" onClick={() => navigate('/checkout')}>Continue</button>
      </div>
    </div>
  );
};

export default CartPage;
