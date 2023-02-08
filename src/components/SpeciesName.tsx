import React, { useState } from "react";

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
  const [speciesNamestate, setSpeciesNameState] = useState("TestSTate");

  return (
    <>
      <label htmlFor={id}>Species Name </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          props.onChangeHandler(e.target.value);
        }}
      />
    </>
  );
}

export default SpeciesName;
