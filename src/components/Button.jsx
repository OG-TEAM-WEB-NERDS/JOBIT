const Button = ({ isSubmit, handleClick, primary, secondary, outlined, children }) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={`group btn ${primary && 'btn-primary'} ${secondary && 'btn-secondary'} ${outlined && 'btn-outlined'}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
