import clsx from "clsx";

export function Card({ className, children, ...props }) {
  return (
    <div className={clsx("bg-white p-6 shadow", className)} {...props}>
      {children}
    </div>
  );
}
