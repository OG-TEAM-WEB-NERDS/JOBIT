import { useState } from 'react';
import Image from 'next/image';

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
  icon,
}) => {
  let iconClassNames;

  switch (true) {
    case outlined && secondary:
      iconClassNames =
        'dark:group-hover:brightness-0 dark:group-hover:invert brightness-40 invert-0 grayscale';
      break;
    case outlined:
      iconClassNames =
        'group-hover:brightness-0 group-hover:invert brightness-100 invert-0';
      break;
    case primary:
      iconClassNames = 'brightness-0 invert';
      break;
    case secondary:
      iconClassNames =
        'dark:group-hover:brightness-0 dark:group-hover:invert brightness-40 invert-0 grayscale';
      break;
    case transparent:
      iconClassNames =
        'group-hover:brightness-0 group-hover:invert brightness-100 invert-0';
      break;
    default:
      iconClassNames = 'brightness-0 invert';
  }

  const classNames = {
    'text-sm': size === 'sm',
    'btn-primary': primary,
    'btn-secondary': secondary,
    'btn-outlined': outlined,
    'btn-transparent': transparent,
    'w-full justify-center': fullWidth,
    'btn-active': isActive,
  };

  // returns classNames only for props passed
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
      {icon && (
        <Image
          src={icon}
          alt="Icon"
          className={`transition duration-300 ${iconClassNames}`}
        />
      )}
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
