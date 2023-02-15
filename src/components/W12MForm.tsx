import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SubmitButton from "./SubmitButton";
import CustomInput from "./CustomInput";
import validateSpeciesName from "./utils/validate-speciesName";
import validatePlanetName from "./utils/validate-planetName";
import validateNumberOfBeings from "./utils/validate-numberOfBeings";
import validateWhatIs from "./utils/validate-whatIs";
import validateReasonForSparing from "./utils/validate-reasonForSparing";

const W12MForm = () => {
  type formData = {
    speciesName: string;
    planetName: string;
    numberOfBeings: string;
    reasonForSparing: string;
    whatIs: string;
  };

  const [formInput, setFormInput] = useState<formData>({
    speciesName: "humans",
    planetName: "Earth",
    numberOfBeings: "1",
    reasonForSparing: "reasonForSparing",
    whatIs: "4",
  });

  function submitButtonClick() {
    console.log(formInput);
  }

  return (
    <section className="w12MForm">
      <W12MHeader />
      {/* REST OF FORM GOES HERE */}

      <CustomInput
        id="SpeciesNameId"
        name="SpeciesName"
        type="text"
        label="Species Name "
        value={formInput.speciesName}
        placeholder="Species Name"
        onChangeHandler={(e) => {
          const newFormInput = { ...formInput };
          newFormInput.speciesName = e;
          setFormInput(newFormInput);
        }}
      />

      <CustomInput
        id="PlanetNameId"
        name="PlanetName"
        type="text"
        label="Planet Name "
        value={formInput.planetName}
        placeholder="Planet Name"
        onChangeHandler={(e) => {
          const newFormInput = { ...formInput };
          newFormInput.planetName = e;
          setFormInput(newFormInput);
        }}
      />

      <CustomInput
        id="NumberOfBeingsId"
        name="NumberOfBeings"
        type="text"
        label="Number of Beings "
        value={formInput.numberOfBeings}
        placeholder="Number of Beings"
        onChangeHandler={(e) => {
          const newFormInput = { ...formInput };
          newFormInput.numberOfBeings = e;
          setFormInput(newFormInput);
        }}
      />
      <CustomInput
        id="WhatIsId"
        name="WhatIs"
        type="select"
        label="What is 2 + 2 "
        value={formInput.whatIs}
        placeholder="What is 2 + 2 "
        onChangeHandler={(e) => {
          const newFormInput = { ...formInput };
          newFormInput.whatIs = e;
          setFormInput(newFormInput);
        }}
      />
      <CustomInput
        id="ReasonForSparingId"
        name="ReasonForSparing"
        type="textarea"
        label="Reason For Sparing "
        value={formInput.reasonForSparing}
        placeholder="Reason for Sparing "
        onChangeHandler={(e) => {
          const newFormInput = { ...formInput };
          newFormInput.reasonForSparing = e;
          setFormInput(newFormInput);
        }}
      />

      <SubmitButton onClickHandler={submitButtonClick} />
    </section>
  );
};

export default W12MForm;
