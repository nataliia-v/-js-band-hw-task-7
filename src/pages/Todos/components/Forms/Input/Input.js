import React from 'react';

function Input({
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  required = false
}) {
  return (
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
}

export default Input;
