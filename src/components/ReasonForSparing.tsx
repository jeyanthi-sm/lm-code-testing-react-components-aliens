import { useState } from "react";

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
  return (
    <>
      <label htmlFor="ReasonForSparingId"> Reason For Sparing </label>
      <textarea //Reason for sparing
        id="ReasonForSparingId"
        value={value}
        onChange={(ev) => {
          inputReasonForSparingProps.onChangeHandler(ev.target.value);
        }}
      />
    </>
  );
};
export default ReasonForSparing;
