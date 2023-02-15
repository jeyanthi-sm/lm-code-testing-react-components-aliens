import React from "react";
const validatePlanetName: (value: string) => string | undefined = (value) => {
  const planetNameRegexp = RegExp(/^[a-z0-9]{2,49}$/, "i"); //find any character not between a-z and 0-9
  const matchPattern = planetNameRegexp.test(value);
  if (!matchPattern)
    return "ERROR! Length  Must be between 2 and 49 characters Numbers Allowed No Special Characters";
  else return "OK";
};
export default validatePlanetName;
