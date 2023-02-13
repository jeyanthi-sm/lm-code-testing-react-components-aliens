import { useState } from "react";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import ReasonForSparing from "./ReasonForSparing";
import W12MHeader from "./W12MHeader";
import WhatIs from "./WhatIs";
import SubmitButton from "./SubmitButton";
const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [numberOfBeings, setNumberOfBeings] = useState<string>("0");
  const [reasonForSparing, setReasonForSparing] = useState<string>("");
  const [whatIsState, setWhatIsState] = useState<string>("Option A");

  function submitButtonClick() {
    console.log("Submitted form");
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}
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
        value={parseInt(numberOfBeings)}
        placeholder="Number of Beings"
        onChangeHandler={setNumberOfBeings}
      />
      <ReasonForSparing
        value={reasonForSparing}
        placeholder="Reason for Sparing"
        onChangeHandler={setReasonForSparing}
      />
      <WhatIs
        id="WhatIsId"
        value={whatIsState}
        placeholder="What is"
        onChangeHandler={setWhatIsState}
      />
      <SubmitButton onClickHandler={submitButtonClick} />
    </section>
  );
};

export default W12MForm;
