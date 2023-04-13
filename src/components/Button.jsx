const Button = ({ isSubmit, handleClick, primary, secondary, outlined, children, fullWidth }) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={`group btn ${primary && 'btn-primary'} ${secondary && 'btn-secondary'} ${outlined && 'btn-outlined'} ${fullWidth && 'w-full justify-center'}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
