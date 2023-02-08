import React from "react";

export interface PlanetNameProps {
  onChangeHandler: (value: string) => void;
  value: string;
  placeholder?: string;
}

export default function PlanetName(props: PlanetNameProps) {
  return (
    <>
      <input
        {...props}
        onChange={(e) => {
          props.onChangeHandler(e.target.value); //  onChange={(event) => console.log(event)}
        }}
      />
    </>
  );
}
