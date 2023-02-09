import { render, screen } from "@testing-library/react";
import ReasonForSparing, { ReasonForSparingProps } from "./ReasonForSparing";
import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

const mockReasonForSparingProps: ReasonForSparingProps = {
  placeholder: "PlanetName",
  onChangeHandler: mockFunction,
  value: "We are Great and Good Beings",
};

function beforeEachTest() {
  render(<ReasonForSparing {...mockReasonForSparingProps} />);
}

test("Existence of Reason For Sparing in the screeen", () => {
  beforeEachTest();
  expect(screen.getByLabelText("Reason For Sparing")).toBeInTheDocument();
});

test("Reason For Sparing Passed Value Displayed correctly in the screen", () => {
  beforeEachTest();
  expect(
    screen.getByDisplayValue(mockReasonForSparingProps.value)
  ).toBeInTheDocument();
});

test("Reason for Sparing capture the changes", async () => {
  beforeEachTest();
  mockFunction();

  const node = screen.getByDisplayValue("We are Great and Good Beings");
  const reasonForSparingNewName = "We are Loving beings";
  const user = userEvent.setup();

  await user.type(node, reasonForSparingNewName);

  expect(mockFunction).toHaveBeenCalledTimes(21);
});
