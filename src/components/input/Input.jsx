
import React from 'react';

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full px-3 py-2 rounded bg-[#1E1E1E] border border-[#333333] focus:outline-none focus:border-[#00FFFF] text-white placeholder:text-gray-500 ${className}`}
      {...props}
    />
  );
};

export default Input;
