import React, { useContext, useEffect, useState } from "react";
import {
  StyledInputForm,
  StyledInputError,
  StyledInputField,
  StyledInputContainer,
  StyledInputHelper,
  StyledInputLabel,
} from "./StyledInput";

import { useForm, FormProvider, useFormContext } from "react-hook-form";

const ValidatedInputContext = React.createContext();

export function ValidatedInputForm({ onSubmit, children, ...props }) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StyledInputForm onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </StyledInputForm>
    </FormProvider>
  );
}

export function ValidatedInputContainer({ children, ...props }) {
  const [name, setName] = useState();
  return (
    <ValidatedInputContext.Provider value={{ name, setName }}>
      <StyledInputContainer {...props}>{children}</StyledInputContainer>
    </ValidatedInputContext.Provider>
  );
}

export function ValidatedInputLabel({ children, ...props }) {
  return <StyledInputLabel {...props}>{children}</StyledInputLabel>;
}

export function ValidatedInputHelper({ children, ...props }) {
  return <StyledInputHelper {...props}>{children}</StyledInputHelper>;
}

export function ValidatedInputField({ name, registerOptions, ...props }) {
  const { register, errors } = useFormContext();
  const { setName } = useContext(ValidatedInputContext);
  useEffect(() => setName(name), [name, setName]);
  return (
    <StyledInputField
      hasError={errors[name]}
      name={name}
      ref={register(registerOptions)}
      {...props}
    />
  );
}

export function ValidatedInputError({ ...props }) {
  const { errors } = useFormContext();
  const { name } = useContext(ValidatedInputContext);
  return (
    <StyledInputError {...props}>{errors[name]?.message}</StyledInputError>
  );
}
