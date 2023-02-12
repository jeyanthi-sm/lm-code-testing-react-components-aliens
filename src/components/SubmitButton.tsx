import React from "react";

interface SubmitButtonProps {
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ onClickHandler }) => (
  <>
    <button type="button" onClick={onClickHandler}>
      {" "}
      Submit Form{" "}
    </button>
  </>
);

export default SubmitButton;
