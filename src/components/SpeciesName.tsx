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
    const speciesNameRegexp = RegExp(/^[a-z]{3,23}$/, "i"); //find any character not between a-z
    //const matchPattern = speciesNameRegexp.test(value);
    const matchPattern = speciesNameRegexp.test(value);
    if (!matchPattern)
      return "ERROR! Length  Must be between 3 and 23 characters Numbers and Special Characters Not allowed";
    else return undefined;
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
