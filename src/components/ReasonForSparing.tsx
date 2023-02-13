import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

export interface ReasonForSparingProps {
  value: string;
  placeholder?: string;
  onChangeHandler: (value: string) => void;
}
const ReasonForSparing: React.FC<ReasonForSparingProps> = (
  inputReasonForSparingProps: ReasonForSparingProps
) => {
  const [reasonForSparing, setReasonForSparing] = useState<String>(
    "We are great beings"
  );
  const { placeholder, value, onChangeHandler } = inputReasonForSparingProps;
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  // some validation function here
  const validateReasonForSparing: (value: string) => string | undefined = (
    value
  ) => {
    const reasonForSparingsNameRegexp = RegExp(/.{17,153}/, "mi"); //find any character not between a-z
    const matchPattern = reasonForSparingsNameRegexp.test(value);
    if (!matchPattern)
      return "ERROR! Length  Must be between 17 and 153 characters Numbers and Special Characters Not allowed";
    else return undefined;
  };

  return (
    <>
      <label htmlFor="ReasonForSparingId"> Reason For Sparing </label>
      <textarea //Reason for sparing
        id="ReasonForSparingId"
        value={value}
        onChange={(ev) => {
          const errorMessage = validateReasonForSparing(ev.target.value);
          setErrorMessage(errorMessage);
          inputReasonForSparingProps.onChangeHandler(ev.target.value);
        }}
      />
      <ErrorMessage message={errorMessage} />
    </>
  );
};
export default ReasonForSparing;
