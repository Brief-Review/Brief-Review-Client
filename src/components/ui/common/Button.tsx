import { ButtonProps } from "../../../models/commons/Button.model";

function Button(props: ButtonProps) {
  const { children, onClick, type, className, disabled } = props;

  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
