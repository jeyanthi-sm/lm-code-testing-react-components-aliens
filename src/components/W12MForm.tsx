import { useState } from "react";
import SpeciesName from "./SpeciesName";
import W12MHeader from "./W12MHeader";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");

  const changeEventHandler = (ev: React.ChangeEvent<HTMLInputElement>): void =>
    setSpeciesName(ev.target.value);

  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("optionA");

  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}

      <SpeciesName
        speciesName={speciesName}
        onChangeHandler={changeEventHandler}
      />
    </section>
  );
};

export default W12MForm;
