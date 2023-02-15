import { render, screen } from "@testing-library/react";
import CustomInput, { CustomInputProps } from "./CustomInput";

import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn(() => "9");

const mockCustomInput: CustomInputProps = {
  id: "CustomInputId",
  name: "CustomName",
  type: "text",
  label: "Custom Label",
  value: "Custom Value",
  placeholder: "Custom Input",
  onChangeHandler: mockFunction,
};

function beforeEachTest() {
  render(<CustomInput {...mockCustomInput} />);
}
describe("Existence of Custom Input on the screen", () => {
  test("Existence of Custom Name on the Screen", () => {
    beforeEachTest();
    expect(screen.getByLabelText(mockCustomInput.label)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockCustomInput.value)).toBeInTheDocument();
  });
});
describe("Passed Value of Custom Name Displayed Correctly", () => {
  test("Passed Value of Custom Name Displayed Correctly", () => {
    beforeEachTest();
    expect(screen.getByDisplayValue(mockCustomInput.value)).toBeInTheDocument();
  });
});
describe("captures renew changes", () => {
  test("captures renew changes", async () => {
    beforeEachTest();
    const customNewName = "New Value";
    const user = userEvent.setup();

    const node = screen.getByRole("textbox");

    await user.type(node, customNewName);

    expect(mockFunction).toHaveBeenCalledTimes(9);
  });
});
