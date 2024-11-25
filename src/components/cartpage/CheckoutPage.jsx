import React, { useState } from 'react'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
const [showError, setShowError] = useState(false); 
const navigate = useNavigate();

const formik = useFormik({
    initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
    },
    validationSchema: Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
        .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Please enter a valid email address.'
        )
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^\d+$/, 'Phone number must be a number')
        .required('Phone number is required'),
    address: Yup.string().required('Address is required')
    }),
    onSubmit: (values) => {
    if (!formik.errors.firstName && !formik.errors.lastName && !formik.errors.email && !formik.errors.phone && !formik.errors.address) {
        navigate('/success');
    }
    }
});

const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(true); 
    formik.handleSubmit();
};

return (
    <div className="checkout-container">
    <h1>Checkout</h1>

    <form onSubmit={handleSubmit}>
        <div className="flex-row">
        <div className="half-width">
            <label>First Name</label>
            <input
            type="text"
            {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
            ) : null}
        </div>
        <div className="half-width">
            <label>Last Name</label>
            <input
            type="text"
            {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
            ) : null}
        </div>
        </div>

        <div className="flex-row">
        <div className="half-width">
            <label>Email</label>
            <input
            type="email"
            {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
            ) : null}
        </div>
        <div className="half-width">
            <label>Phone</label>
            <input
            type="text"
            {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
            ) : null}
        </div>
        </div>  

        <div>
        <label>Address</label>
        <input
            type="text"
            {...formik.getFieldProps('address')}
        />
        {formik.touched.address && formik.errors.address ? (
            <div className="error">{formik.errors.address}</div>
        ) : null}
        </div>

        {showError && (
        <div className="error-message">
            <p><strong>Oh snap!</strong> Change a few things up and try submitting again.</p>
            <button className="close-error" onClick={() => setShowError(false)}>×</button>
        </div>
        )}

        <div className="actions">
        <button type="button" onClick={() => navigate(-1)} className="go-back-button">Go Back</button>
        <button type="submit" className="continue-button">Continue</button>
        </div>
    </form>
    </div>
);
};

export default CheckoutPage;
