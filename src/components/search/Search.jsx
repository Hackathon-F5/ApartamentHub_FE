// src/components/Search.jsx
import React from 'react';

const Search = ({ className = '', size = 24, ...props }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707a1 1 0 001.414-1.414l-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
    </svg>
  );
};

export default Search;
