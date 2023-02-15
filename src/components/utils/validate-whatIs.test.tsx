import { render, screen } from "@testing-library/react";
import CustomInput, { CustomInputProps } from "../CustomInput";

import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

const mockWhatIsInput: CustomInputProps = {
  id: "WhatIsId",
  name: "WhatIs",
  type: "select",
  label: "What is 2+2",
  value: "4",
  placeholder: "What Is",
  onChangeHandler: mockFunction,
};

function beforeEachTest() {
  render(<CustomInput {...mockWhatIsInput} />);
}

describe("Change to What Is", () => {
  test("captures Changes", async () => {
    beforeEachTest();
    const whatIsNewValue = "Not 4";
    const user = userEvent.setup();

    const node = screen.getByRole("combobox");

    await user.selectOptions(node, whatIsNewValue);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
