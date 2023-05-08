interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

function IconButton(props: ButtonProps) {
  const { children, onClick, type, className, disabled } = props;

  return (
    <button
      className={`flex items-center justify-center rounded h-12 w-12  shadow-md text-primary transition-all bg-white hover:scale-110 active:scale-100 dark:bg-neutral-800  ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span className="first:h-6 first:w-6 first:text-2xl first:m-auto">{children}</span>
    </button>
  );
}

export default IconButton;
