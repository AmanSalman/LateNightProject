import React from 'react';

const FilterButtons = ({ activeCategory, onFilterChange }) => {
  const categories = ['All', 'Electronics', 'Clothing', 'Home'];

  return (
    <div id="filter-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
