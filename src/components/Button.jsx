import Image from 'next/image';

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
  icon,
}) => {
  let iconClassNames;

  switch (true) {
    case outlined && secondary:
      iconClassNames = 'dark:group-hover:brightness-0 dark:group-hover:invert brightness-40 invert-0 grayscale';
      break;
    case outlined:
      iconClassNames = 'group-hover:brightness-0 group-hover:invert brightness-100 invert-0';
      break;
    case primary:
      iconClassNames = 'brightness-0 invert';
      break;
    case secondary:
      iconClassNames = 'dark:group-hover:brightness-0 dark:group-hover:invert brightness-40 invert-0 grayscale';
      break;
    case transparent:
      iconClassNames = 'group-hover:brightness-0 group-hover:invert brightness-100 invert-0';
      break;
    default:
      iconClassNames = 'brightness-0 invert';
  }

  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className={`group btn ${size === 'sm' && 'text-sm'} ${primary && 'btn-primary'
      } ${secondary && 'btn-secondary'} ${outlined && 'btn-outlined'} ${transparent && 'btn-transparent'
      } ${fullWidth && 'w-full justify-center'} ${isActive && 'btn-active'}`}
      onClick={handleClick}
    >
      {
      icon && (
      <Image
        src={icon}
        alt="Icon"
        className={`transition duration-300 ${iconClassNames}`}
      />
      )
    }
      {children}
    </button>
  );
};

export default Button;
