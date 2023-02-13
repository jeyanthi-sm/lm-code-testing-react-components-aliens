import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface WhatIsProps {
  id: string;
  placeholder?: string;
  value: string;
  onChangeHandler: (value: string) => void;
}

const WhatIs: React.FC<WhatIsProps> = (inputProps: WhatIsProps) => {
  //destructuring an object
  const { id, placeholder, value } = inputProps;
  const [whatIsState, setWhatIsState] = useState();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const validateWhatIs: (value: string) => string | undefined = (value) => {
    if (value === "4") return undefined;
    else return "ERROR! Not a Valid Value";
  };

  return (
    <>
      <label htmlFor={id}> What is 2 + 2 </label>
      <select
        id={id}
        value={whatIsState}
        placeholder={placeholder}
        onChange={(e) => {
          const errorMessage = validateWhatIs(e.target.value);
          setErrorMessage(errorMessage);
          inputProps.onChangeHandler(e.target.value);
        }}
      >
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default WhatIs;
