import React, { forwardRef } from "react";
import clsx from "clsx";
import {
  AccessibleInputForm,
  AccessibleInputError,
  AccessibleInputField,
  AccessibleInputContainer,
  AccessibleInputHelper,
  AccessibleInputLabel,
} from "./AccessibleInput";

export function StyledInputForm({ className, children, ...props }) {
  return (
    <AccessibleInputForm className={clsx(className)} {...props}>
      {children}
    </AccessibleInputForm>
  );
}

export function StyledInputContainer({ className, children, ...props }) {
  return (
    <AccessibleInputContainer
      className={clsx("flex flex-col", className)}
      {...props}
    >
      {children}
    </AccessibleInputContainer>
  );
}

export function StyledInputLabel({ className, children, ...props }) {
  return (
    <AccessibleInputLabel
      className={clsx(
        "mb-2 leading-4 text-sm text-gray-700 font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </AccessibleInputLabel>
  );
}

export function StyledInputHelper({ className, children, ...props }) {
  return (
    <AccessibleInputHelper
      className={clsx("mb-2 -mt-2 leading-6 text-sm text-gray-600", className)}
      {...props}
    >
      {children}
    </AccessibleInputHelper>
  );
}

export const StyledInputField = forwardRef(function (
  { hasError, className, ...props },
  ref
) {
  return (
    <AccessibleInputField
      className={clsx(
        "border-2",
        "py-2",
        "px-4",
        "border-gray-500",
        "text-gray-900",
        "text-xl",
        "leading-7",
        "font-semibold",
        "focus:outline-none",
        "focus:shadow-outline",
        { "border-red-500": hasError },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export function StyledInputError({ className, children, ...props }) {
  return (
    <AccessibleInputError
      className={clsx(
        "mt-2 text-sm leading-4 text-red-600 font-medium",
        className
      )}
      {...props}
    >
      {children}
    </AccessibleInputError>
  );
}
