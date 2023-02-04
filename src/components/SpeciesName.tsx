import React, { EventHandler } from "react";
import { text } from "stream/consumers";
import { useState } from "react";

export interface SpeciesNameProps {
  speciesName?: string;
  onChangeHandler?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

function SpeciesName(inputSpeciesName: SpeciesNameProps) {
  const [speciesName, setSpeciesName] = useState<string>("humans");

  const changeEventHandler = (ev: React.ChangeEvent<HTMLInputElement>): void =>
    setSpeciesName(ev.target.value);

  return (
    <>
      <label htmlFor="speciesName">Species Name </label>
      <input
        id="speciesName"
        type="text"
        value={inputSpeciesName.speciesName}
        onChange={inputSpeciesName.onChangeHandler}
      />
    </>
  );
}

export default SpeciesName;
