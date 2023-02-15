import React from "react";
import ErrorMessage from "./ErrorMessage";
import validatePlanetName from "./utils/validate-planetName";
import { useState } from "react";
import validateReasonForSparing from "./utils/validate-reasonForSparing";
import validateWhatIs from "./utils/validate-whatIs";
import validateNumberOfBeings from "./utils/validate-numberOfBeings";
import validateSpeciesName from "./utils/validate-speciesName";

export interface CustomInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  onChangeHandler: (value: string) => void;
  value: string;
}

const CustomInput: React.FC<CustomInputProps> = (
  inputCustomInputProps: CustomInputProps
) => {
  const { id, name, type, label, placeholder, onChangeHandler, value } =
    inputCustomInputProps;
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  return (
    <>
      <div className="formInputs">
        <label htmlFor={id}> {label} </label>
        {type === "textarea" ? (
          <textarea //Reason for sparing
            id="ReasonForSparingId"
            value={value}
            onChange={(ev) => {
              const errorMessage = validateReasonForSparing(ev.target.value);
              setErrorMessage(errorMessage);
              onChangeHandler(ev.target.value);
            }}
          />
        ) : type === "select" ? (
          <select
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={(e) => {
              const errorMessage = validateWhatIs(e.target.value);
              setErrorMessage(errorMessage);
              onChangeHandler(e.target.value);
            }}
          >
            <option value="4">4</option>
            <option value="Not 4">Not 4</option>
          </select>
        ) : name === "PlanetName" ? (
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => {
              const errorMessage = validatePlanetName(e.target.value);
              setErrorMessage(errorMessage);
              onChangeHandler(e.target.value);
            }}
          ></input>
        ) : name === "SpeciesName" ? (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              const errorMessage = validateSpeciesName(e.target.value);
              setErrorMessage(errorMessage);
              onChangeHandler(e.target.value);
            }}
          />
        ) : (
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              const errorMessage = validateNumberOfBeings(e.target.value);
              setErrorMessage(errorMessage);
              onChangeHandler(e.target.value);
            }}
          />
        )}
      </div>
      {errorMessage !== "OK" && (
        <div>
          <ErrorMessage message={errorMessage} />
        </div>
      )}
    </>
  );
};
export default CustomInput;
