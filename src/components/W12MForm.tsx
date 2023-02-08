import { useState } from "react";
import SpeciesName, { SpeciesNameProps } from "./SpeciesName";
import PlanetName, { PlanetNameProps } from "./PlanetName";
import W12MHeader from "./W12MHeader";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("optionA");

  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}

      <SpeciesName
        id="SpeciesNameId"
        type="SpeciesName"
        value={speciesName}
        placeholder="Species Name"
        onChangeHandler={(newvalue) => {
          setSpeciesName(newvalue);
        }}
      />

      <PlanetName
        value={planetName}
        placeholder="Planet Name"
        onChangeHandler={(newvalue) => {
          setPlanetName(newvalue);
        }}
      />
      <label htmlFor="ReasonForSparing"> Reason For Sparing </label>
      <textarea //Reason for sparing
        id="ReasonForSparing"
        value={textAreaValue}
        onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>): void =>
          setTextAreaValue(ev.target.value)
        }
      />
      <label htmlFor="Whatis2+2"> What is 2 + 2 </label>
      <select
        id="Whatis2+2"
        value={selectValue}
        onBlur={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
          setSelectValue(ev.target.value)
        }
      >
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
    </section>
  );
};

export default W12MForm;
