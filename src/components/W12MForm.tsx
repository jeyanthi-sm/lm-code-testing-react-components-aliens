import { useState } from "react";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import ReasonForSparing from "./ReasonForSparing";
import W12MHeader from "./W12MHeader";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numberOfBeings, setNumberOfBeings] = useState<number>(0);
  const [reasonForSparing, setReasonForSparing] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("optionA");

  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}
      <form className="mainForm">
        <SpeciesName
          id="SpeciesNameId"
          type="SpeciesName"
          value={speciesName}
          placeholder="Species Name"
          onChangeHandler={setSpeciesName}
        />

        <PlanetName
          value={planetName}
          placeholder="Planet Name"
          onChangeHandler={setPlanetName}
        />

        <NumberOfBeings
          value={numberOfBeings}
          placeholder="Number of Beings"
          onChangeHandler={setNumberOfBeings}
        />

        <ReasonForSparing
          value={reasonForSparing}
          placeholder="Reason for Sparing"
          onChangeHandler={setReasonForSparing}
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
      </form>
    </section>
  );
};

export default W12MForm;
