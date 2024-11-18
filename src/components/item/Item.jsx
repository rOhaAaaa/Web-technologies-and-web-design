import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './item.css';

const Item = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

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
            <input type="number" min="1" defaultValue="1" id="countable-field" className="countable-field" />
          </div>
          <div className="field-group">
            <label htmlFor="selectable-field" className="field-label">Selectable Field</label>
            <select id="selectable-field" className="selectable-field">
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className="item-buttons">
          <button className="back-button" onClick={() => navigate(-1)}>Go back</button>
          <button className="add-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
