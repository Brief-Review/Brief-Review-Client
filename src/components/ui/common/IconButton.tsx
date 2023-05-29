import { ButtonProps } from "../../../models/commons/Button.model";

function IconButton(props: ButtonProps) {
  const { children, onClick, type, className, disabled } = props;

  return (
    <button
      className={`flex items-center justify-center rounded h-12 w-12 min-w-2000  shadow-md text-neutral-500 dark:text-white  transition-all  hover:scale-110 active:scale-100 dark:bg-neutral-900  ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span className="first:h-6 first:w-6 first:text-2xl first:m-auto">
        {children}
      </span>
    </button>
  );
}

export default IconButton;
