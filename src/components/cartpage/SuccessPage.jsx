import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions'; 
import { useNavigate } from 'react-router-dom';
import './SuccessPage.css'; 

const SuccessPage = () => {
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
    dispatch(clearCart());
    setTimeout(() => {
    navigate('/catalog'); 
    }, 3000);
}, [dispatch, navigate]);

return (
    <div className="success-container">
    <div className="checkmark-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="158" height="158">
        <circle cx="12" cy="12" r="10" fill="#4caf50"/>
        <path fill="none" stroke="#fff" strokeWidth="2" d="M6 12l4 4L18 8" />
        </svg>
    </div>

    <h1>Success!</h1>
    <p>Your order was sent to processing! <br /> Check your email box for further information.</p>
    <button onClick={() => navigate('/catalog')}>Go back to Catalog</button>
    </div>
);
};

export default SuccessPage;
