import { ButtonProps } from "../../../models/commons/Button.model";

function IconButton(props: ButtonProps) {
  const { children, onClick, type, className, disabled } = props;

  return (
    <button
      className={`flex items-center justify-center rounded h-12 w-12  shadow-md text-primary transition-all bg-white hover:scale-110 active:scale-100 dark:bg-neutral-900  ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span className="first:h-6 first:w-6 first:text-2xl first:m-auto">{children}</span>
    </button>
  );
}

export default IconButton;
