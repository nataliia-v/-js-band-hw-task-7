import React from 'react';

function Select({ name, value, onChange, options }) {
  return (
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
