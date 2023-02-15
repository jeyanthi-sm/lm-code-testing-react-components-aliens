import React from "react";
const validateSpeciesName: (value: string) => string | undefined = (value) => {
  const speciesNameRegexp = RegExp(/^[a-z]{3,23}$/, "i"); //find any character not between a-z
  const matchPattern = speciesNameRegexp.test(value);
  if (!matchPattern)
    return "ERROR! Length  Must be between 3 and 23 characters Numbers and Special Characters Not allowed";
  else return "OK";
};
export default validateSpeciesName;
