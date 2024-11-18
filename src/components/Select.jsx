// src/components/Select.jsx
import React from 'react';
import './Select.css'; // Підключіть стилі для select

const Select = ({ options, onChange }) => {
  return (
    <select className="custom-select" onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
