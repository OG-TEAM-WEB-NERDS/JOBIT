const Button = ({ type = 'button', small, handleClick, primary, secondary, outlined, children }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={`group btn ${primary && 'btn-primary'} ${secondary && 'btn-secondary'} ${outlined && 'btn-outlined'} ${small && 'text-xs'}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
