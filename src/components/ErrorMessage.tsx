import React, { useState } from "react";

export interface ErrorMessageProps {
  // isValid: boolean;
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (
  inputProps: ErrorMessageProps
) => {
  const { message } = inputProps;
  return (
    <>
      {!message}
      <div> {message} </div>
    </>
  );
  //return <div> {!isValid && <em> {message} </em>} </div>;
};
export default ErrorMessage;
