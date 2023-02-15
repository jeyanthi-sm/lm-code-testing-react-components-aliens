import React from "react";
const validateWhatIs: (value: string) => string | undefined = (value) => {
  if (value === "4") return "OK";
  else return "ERROR! Not a Valid Value";
};
export default validateWhatIs;
