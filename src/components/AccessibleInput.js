import React, { useContext, useState } from "react";

let id = 1;

const AccessibleInputContext = React.createContext();

export function AccessibleInputContainer({ children, ...props }) {
  const [field_id] = useState(id++);
  const [helper_id] = useState(id++);
  const [error_id] = useState(id++);

  return (
    <AccessibleInputContext.Provider value={{ field_id, helper_id, error_id }}>
      <div {...props}>{children}</div>
    </AccessibleInputContext.Provider>
  );
}

export function AccessibleInputLabel({ children, ...props }) {
  const { field_id } = useContext(AccessibleInputContext);
  return (
    <label htmlFor={field_id} {...props}>
      {children}
    </label>
  );
}

export function AccessibleInputHelper({ children, ...props }) {
  const { helper_id } = useContext(AccessibleInputContext);
  return (
    <div id={helper_id} {...props}>
      {children}
    </div>
  );
}

export const AccessibleInputField = forwardRef(function (props, ref) {
  const { field_id, helper_id, error_id } = useContext(AccessibleInputContext);
  return (
    <input
      id={field_id}
      aria-describedby={`${helper_id} ${error_id}`}
      ref={ref}
      {...props}
    />
  );
});

export function AccessibleInputError({ children, ...props }) {
  const { error_id } = useContext(AccessibleInputContext);
  return (
    <div id={error_id} {...props}>
      {children}
    </div>
  );
}
