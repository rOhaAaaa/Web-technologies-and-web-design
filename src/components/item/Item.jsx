import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import './item.css';

const Item = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Select'); 
  const [quantity, setQuantity] = useState(1);  

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  const handleAddToCart = () => {
    const product = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: quantity,  
    };
    dispatch(addToCart(product, selectedOption));  
    navigate('/cart');
  };

  return (
    <div className="item-page">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h1 className="item-title">{item.name}</h1>
        <p className="item-description">{item.description}</p>
        <p className="item-price">Price: ${item.price}</p>
        <div className="item-actions">
          <div className="field-group">
            <label htmlFor="countable-field" className="field-label">Countable field</label>
            <input
              type="number"
              min="1"
              value={quantity}  
              onChange={(e) => setQuantity(Number(e.target.value))}  
              id="countable-field"
              className="countable-field"
            />
          </div>
          <div className="field-group">
            <label htmlFor="selectable-field" className="field-label">Selectable Field</label>
            <select
              id="selectable-field"
              className="selectable-field"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}  
            >
              <option>Select</option>
              <option>Shade - Light</option>
              <option>Shade - Medium</option>
              <option>Shade - Dark</option>
              <option>Shade - Very Dark</option>
              <option>Finish - Matte</option>
              <option>Finish - Dewy</option>
              <option>Finish - Natural</option>
            </select>
          </div>
        </div>
        <div className="item-buttons">
          <button className="back-button" onClick={() => navigate(-1)}>Go back</button>
          <button className="add-button" onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
