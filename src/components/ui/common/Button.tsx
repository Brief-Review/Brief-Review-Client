import { ButtonProps } from "../../../models/commons/Button.model";

function Button(props: ButtonProps) {
  const { children, onClick, type, className, disabled } = props;

  return (
    <button
      className={`bg-primary rounded py-2 px-4 text-white shadow-md font-semibold hover:scale-105 active:scale-100 transition-all disabled:bg-neutral-500 disabled:opacity-70 ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
