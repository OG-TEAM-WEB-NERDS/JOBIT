import { useState } from 'react';

const Button = ({
  isSubmit,
  isActive,
  handleClick,
  primary,
  secondary,
  outlined,
  transparent,
  children,
  fullWidth,
  size,
}) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={`group btn ${size === 'sm' && 'text-sm'} ${
      primary && 'btn-primary'
    } ${secondary && 'btn-secondary'} ${outlined && 'btn-outlined'} ${
      transparent && 'btn-transparent'
    } ${fullWidth && 'w-full justify-center'} ${isActive && 'btn-active'}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
