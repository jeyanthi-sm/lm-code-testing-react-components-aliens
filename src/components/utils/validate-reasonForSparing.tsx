import React from "react";
const validateReasonForSparing: (value: string) => string | undefined = (
  value
) => {
  const reasonForSparingsNameRegexp = RegExp(/^(.|\n){17,153}$/, "i"); //find any character not between a-z
  const matchPattern = reasonForSparingsNameRegexp.test(value);
  if (!matchPattern)
    return "ERROR! Length  Must be between 17 and 153 characters Numbers and Special Characters Not allowed";
  else return "OK";
};
export default validateReasonForSparing;
