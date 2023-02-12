import React, { useState } from "react";

export interface WhatIsProps {
  id: string;
  placeholder?: string;
  value: string;
  onChangeHandler: (value: string) => void;
}

const WhatIs: React.FC<WhatIsProps> = (inputProps: WhatIsProps) => {
  //destructuring an object
  const { id, placeholder, value } = inputProps;
  const [whatIsState, setWhatIsState] = useState("4");

  return (
    <>
      <label htmlFor={id}> What is 2 + 2 </label>
      <select
        id={id}
        value={whatIsState}
        placeholder="What is"
        onChange={(e) => {
          inputProps.onChangeHandler(e.target.value);
        }}
      >
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
      </select>
    </>
  );
};

export default WhatIs;
