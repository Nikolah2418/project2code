import React, { useState } from 'react';

const FacetedSearch = ({ onFilter }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    contentType: [],
    genres: [],
    contentRating: [],
    contentReleaseYear: [],
    contentLength: [],
  });

  const optionToChange = (specificOption, value) => {
    setSelectedOptions((oldOptions) => {
      const updatedOptions = { ...oldOptions };
      const selectedValues = oldOptions[specificOption];
      if (selectedValues.includes(value)) {
        updatedOptions[specificOption] = selectedValues.filter((v) => v !== value);
      } else {
        updatedOptions[specificOption] = [...selectedValues, value];
      }
      return updatedOptions;
    });
  };

  const options = {
    contentType: ['Video Games', 'Movies', 'TV-Shows', 'Board Games'],
    genres: ['Action', 'Adventure', 'Horror', 'Romance', 'Role-Playing', 'Strategy'],
    contentRating: ['10/10', '9/10', '8/10', '7/10', '6/10', '5/10'],
    contentReleaseYear: ['2023', '2022', '2021', '2020', 'Previous to 2020'],
    contentLength: ['Over 100 Hours', '50-100 Hours', '25-50 Hours', '10-25 Hours', 'Less than 10 Hours'],
  };

  const toFilterButton = () => {
    onFilter(selectedOptions);
  };

  return (
    <div className='content faceted-search'>
      {Object.entries(options).map(([category, values]) => (
        <div key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}:</h3>
          {values.map((value) => (
            <label key={value}>
              <input
                type="checkbox"
                value={value}
                checked={selectedOptions[category].includes(value)}
                onChange={() => optionToChange(category, value)}
              />
              {value}
            </label>
          ))}
        </div>
      ))}
      <div className='filter'><button onClick={toFilterButton}>Filter Results</button></div>
    </div>
  );
};

export default FacetedSearch;
