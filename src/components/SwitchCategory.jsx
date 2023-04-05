import { useState } from 'react';

export const SwitchCategory = ({ categories, currentCategory, onCategoryChange }) => {
  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={category === currentCategory ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
