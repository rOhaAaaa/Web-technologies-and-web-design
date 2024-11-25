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

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
    setError(''); 
  };

  const handleQuantityChange = (productId, operation) => {
    const product = cart.find(item => item.id === productId);
    if (operation === 'increment') {
      if (product.quantity < 10) {  
        dispatch(incrementItem(productId));
        setError(''); 
      } else {
        setError('Cannot add more than 10 items of this product.');
      }
    } else if (operation === 'decrement') {
      dispatch(decrementItem(productId));
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
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <p>Option: {product.option}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(product.id, 'decrement')}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => handleQuantityChange(product.id, 'increment')}>+</button>
            </div>
            <button onClick={() => handleRemove(product.id)} className="remove-button">Remove</button>
          </div>
        ))}
      </div>
      <div className="total-amount">
        <h3>Total amount: ${totalAmount}</h3>
      </div>
      <div className="actions">
        <button className="back-button" onClick={() => navigate('/catalog')}>Back to Catalog</button>
        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
};

export default CartPage;
