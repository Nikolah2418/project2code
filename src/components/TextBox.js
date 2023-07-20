import React from 'react';

const TextBox = ({ value, onChange, className, type }) => {
  return (
    <div className='box'>
      <textarea
        value={value}
        onChange={onChange}
        className={className}
        placeholder={type}
        style={{ resize: 'vertical' }}
      />
    </div>
  );
};

export default TextBox;
