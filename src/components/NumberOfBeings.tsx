import React, { useState } from "react";

export interface NumberOfBeingsProps {
  value: number;
  placeholder?: string;
  onChangeHandler: (value: number) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = (
  inputProps: NumberOfBeingsProps
) => {
  const { value, placeholder, onChangeHandler } = inputProps;
  const [NumberOfBeings, setNumberOfBeings] = useState<number>(0);
  return (
    <>
      <label htmlFor="NumberOfBeingsId"> Number of Beings </label>
      <input
        type="number"
        id="NumberOfBeingsId"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          inputProps.onChangeHandler(e.target.value as unknown as number);
        }}
      />
    </>
  );
};

export default NumberOfBeings;
