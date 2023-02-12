import { render, screen } from "@testing-library/react";
import WhatIs, { WhatIsProps } from "./WhatIs";
import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

const mockWhatIsProps: WhatIsProps = {
  id: "whatIsId",
  placeholder: "What is",
  onChangeHandler: mockFunction,
  value: "4",
};

function beforeEachTest() {
  render(<WhatIs {...mockWhatIsProps} />);
}
describe("Test What Is", () => {
  test("Existence of What Is in the screeen", () => {
    beforeEachTest();
    expect(screen.getByLabelText("What is 2 + 2")).toBeInTheDocument();
  });
});
describe("What Is Value displayed correctly", () => {
  test("Passed Value of What is Displayed Correctly", () => {
    beforeEachTest();
    expect(screen.getByDisplayValue(mockWhatIsProps.value)).toBeInTheDocument();
  });
});
describe("Change to What Is", () => {
  test("captures Changes", async () => {
    beforeEachTest();
    const whatIsNewValue = "4";
    const user = userEvent.setup();

    const node = screen.getByRole("combobox");

    await user.selectOptions(node, whatIsNewValue);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
