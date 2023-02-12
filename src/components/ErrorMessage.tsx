import React, { useState } from "react";

export interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (
  inputProps: ErrorMessageProps
) => {
  const { message } = inputProps;
  return (
    <>
      <label> {message} </label>
    </>
  );
};
export default ErrorMessage;
