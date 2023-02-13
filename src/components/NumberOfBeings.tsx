import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface NumberOfBeingsProps {
  value: number;
  placeholder?: string;
  //onChangeHandler: (value: number) => number;
  onChangeHandler: (value: string) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = (
  inputProps: NumberOfBeingsProps
) => {
  const { value, placeholder, onChangeHandler } = inputProps;
  const [NumberOfBeings, setNumberOfBeings] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const validateNumberOfBeings: (value: string) => string | undefined = (
    value
  ) => {
    if (parseInt(value) < 1000000000)
      return "ERROR! Number of beings cannot be less than 1000000000";
    else return undefined;
  };

  return (
    <>
      <label htmlFor="NumberOfBeingsId"> Number of Beings </label>
      <input
        type="number"
        id="NumberOfBeingsId"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const errorMessage = validateNumberOfBeings(e.target.value);
          setErrorMessage(errorMessage);
          inputProps.onChangeHandler(e.target.value);
          //      inputProps.onChangeHandler(e.target.value as unknown as number);
        }}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default NumberOfBeings;
