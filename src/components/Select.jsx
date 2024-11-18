import React from 'react';
import './Select.css'; 

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
