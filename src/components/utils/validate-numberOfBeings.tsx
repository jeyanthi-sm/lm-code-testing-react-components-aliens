import React from "react";
const validateNumberOfBeings: (value: string) => string | undefined = (
  value
) => {
  if (parseInt(value) < 1000000000)
    return "ERROR! Number of beings cannot be less than 1000000000";
  else return "OK";
};
export default validateNumberOfBeings;
