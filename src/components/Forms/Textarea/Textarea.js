import React from 'react';

function Textarea({ name, value, placeholder, onChange, rows = 3 }) {
  return (
    <textarea
      className="form-control"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
    />
  );
}

export default Textarea;
