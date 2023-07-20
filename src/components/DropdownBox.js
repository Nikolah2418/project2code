import React, { useState } from 'react';

const DropdownBox = ({ dropdownoptions, type }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange} className="small-text-box">
        <option value="">{type}</option>
        {dropdownoptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownBox;
