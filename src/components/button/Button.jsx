import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 bg-[#00FFFF] hover:bg-[#00CCFF] text-black font-medium shadow-[0_0_10px_rgba(0,255,255,0.3)] rounded transition-colors duration-200 w-auto ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
