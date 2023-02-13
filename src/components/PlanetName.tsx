import { getByPlaceholderText } from "@testing-library/react";
import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface PlanetNameProps {
  onChangeHandler: (value: string) => void;
  value: string;
  placeholder?: string;
}

export default function PlanetName(props: PlanetNameProps) {
  const [planetName, setPlanetName] = useState("Test Planet");
  const { value, placeholder, onChangeHandler } = props;
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const validatePlanetName: (value: string) => string | undefined = (value) => {
    const planetNameRegexp = RegExp(/^[a-z0-9]{2,49}$/, "i"); //find any character not between a-z and 0-9
    const matchPattern = planetNameRegexp.test(value);
    if (!matchPattern)
      return "ERROR! Length  Must be between 2 and 49 characters Numbers Allowed No Special Characters";
    else return undefined;
  };
  return (
    <>
      <label htmlFor="PlanetNameId"> Planet Name </label>
      <input
        id="PlanetNameId"
        value={value}
        placeholder="Planet Name"
        onChange={(e) => {
          const errorMessage = validatePlanetName(e.target.value);
          setErrorMessage(errorMessage);
          props.onChangeHandler(e.target.value);
        }}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
}
