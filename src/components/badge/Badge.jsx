import React from 'react';

const Badge = ({ children, color = 'cyan', className = '', ...props }) => {
  const baseStyles = 'inline-block px-3 py-1 bg-[#1E1E1E] rounded cursor-pointer border transition-all duration-200';
  const colorStyles = color === 'pink' 
    ? 'text-[#FF007F] border-[#FF007F]/30 hover:bg-[#252525] hover:shadow-[0_0_8px_rgba(255,0,127,0.3)] hover:border-[#FF007F]'
    : 'text-[#00FFFF] border-[#00FFFF]/30 hover:bg-[#252525] hover:shadow-[0_0_8px_rgba(0,255,255,0.3)] hover:border-[#00FFFF]';

  return (
    <span
      className={`${baseStyles} ${colorStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;