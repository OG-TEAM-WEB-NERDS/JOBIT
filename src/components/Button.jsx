import { useState } from 'react';

const Button = ({
  isSubmit,
  isActive = false,
  handleClick,
  primary = false,
  secondary = false,
  outlined = false,
  transparent = false,
  children,
  fullWidth = false,
  size = false,
}) => {
  const classNames = {
    'text-sm': size === 'sm',
    'btn-primary': primary,
    'btn-secondary': secondary,
    'btn-outlined': outlined,
    'btn-transparent': transparent,
    'w-full justify-center': fullWidth,
    'btn-active': isActive,
  };

  //returns classNames only for props passed
  const buttonClassNames = Object.entries(classNames)
    .filter(([key, value]) => Boolean(value))
    .map(([key, value]) => key)
    .join(' ');

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
      className={`group btn ${buttonClassNames}`}
    >
      {children}
    </button>
  );
};
export default Button;

// className={`group btn ${size === 'sm' && 'text-sm'} ${
//   primary && 'btn-primary'
// } ${secondary && 'btn-secondary'} ${outlined && 'btn-outlined'} ${
//   transparent && 'btn-transparent'
// } ${fullWidth && 'w-full justify-center'} ${isActive && 'btn-active'}`}
