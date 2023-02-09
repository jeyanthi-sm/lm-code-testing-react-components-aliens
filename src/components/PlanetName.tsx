import { getByPlaceholderText } from "@testing-library/react";
import React, { useState } from "react";

export interface PlanetNameProps {
  onChangeHandler: (value: string) => void;
  value: string;
  placeholder?: string;
}

export default function PlanetName(props: PlanetNameProps) {
  const [planetName, setPlanetName] = useState("Test Planet");
  const { value, placeholder, onChangeHandler } = props;

  return (
    <>
      <label htmlFor="PlanetNameid"> Planet Name </label>
      <input
        value={value}
        placeholder="Planet Name"
        onChange={(e) => {
          props.onChangeHandler(e.target.value);
        }}
      />
    </>
  );
}
