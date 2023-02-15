import React, { useState } from "react";

export interface ErrorMessageProps {
  // isValid: boolean;
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (
  inputProps: ErrorMessageProps
) => {
  const { message } = inputProps;
  return <>{message !== "OK" && <div className="errorDiv"> {message}</div>}</>;
};
export default ErrorMessage;
