
import React from 'react';
import './PrimaryButton.css'; // Підключіть стилі для кнопки

const PrimaryButton = ({ label, onClick }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
