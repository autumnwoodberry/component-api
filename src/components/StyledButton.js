import clsx from "clsx";

export function StyledButton({ className, children, ...props }) {
  return (
    <button
      className={clsx(
        "bg-blue-700",
        "hover:bg-blue-800",
        "text-white",
        "font-semibold",
        "text-xl",
        "leading-7",
        "py-2",
        "px-6",
        "border-2",
        "border-transparent",
        "focus:outline-none",
        "focus:shadow-outline",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
