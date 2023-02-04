import { useState } from "react";
import SpeciesName from "./SpeciesName";
import W12MHeader from "./W12MHeader";

const W12MForm = () => {
  /*const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.value = "Demon";
  };*/

  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("optionA");

  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}

      <SpeciesName />

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
