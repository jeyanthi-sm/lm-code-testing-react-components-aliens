import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
export interface SpeciesNameProps {
  id: string;
  type: string;
  placeholder?: string;
  value: string;
  onChangeHandler: (value: string) => void;
}

function SpeciesName(props: SpeciesNameProps) {
  //destructuring an object
  const { id, type, placeholder, value } = props;
  const [speciesNamestate, setSpeciesNameState] = useState("Test Species");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  // some validation function here
  const validate: (value: string) => string | undefined = (value) => {
    // do stuff
    const speciesNameRegexp = new RegExp(/[a-z]{3,23}/, "i");
    const matchPattern = speciesNameRegexp.test(value);
    if (value.length < 3 && value.length > 23)
      return "ERROR! Length  Must be between 3 and 23 characters";
  };

  return (
    <>
      <label htmlFor={id}>Species Name </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          props.onChangeHandler(e.target.value);
        }}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
}

export default SpeciesName;
