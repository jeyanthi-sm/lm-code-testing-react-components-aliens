import { render, screen } from "@testing-library/react";
import ReasonForSparing, { ReasonForSparingProps } from "./ReasonForSparing";
import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

const mockReasonForSparingProps: ReasonForSparingProps = {
  placeholder: "PlanetName",
  onChangeHandler: mockFunction,
  value: "We are Great and Good Beings",
};

function beforeEachTest(inputProps: ReasonForSparingProps) {
  render(<ReasonForSparing {...inputProps} />);
}

test("Existence of Reason For Sparing in the screeen", () => {
  beforeEachTest(mockReasonForSparingProps);
  expect(screen.getByLabelText("Reason For Sparing")).toBeInTheDocument();
});

test("Reason For Sparing Passed Value Displayed correctly in the screen", () => {
  beforeEachTest(mockReasonForSparingProps);
  expect(
    screen.getByDisplayValue(mockReasonForSparingProps.value)
  ).toBeInTheDocument();
});

test("Reason for Sparing capture the changes", async () => {
  beforeEachTest(mockReasonForSparingProps);
  mockFunction();

  const node = screen.getByDisplayValue("We are Great and Good Beings");
  const reasonForSparingNewName = "We are Loving beings";
  const user = userEvent.setup();

  await user.type(node, reasonForSparingNewName);

  expect(mockFunction).toHaveBeenCalledTimes(21);
});

const mockReasonForSparingValid: ReasonForSparingProps = {
  placeholder: "Reason For Sparing",
  onChangeHandler: mockFunction,
  value: "E",
};
const MOCKMAXLENGTHREASONFORSPARING =
  "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio";

const MOCKMINLENGTHREASONFORSPARING = "ABC";

const onChangeValidation = async (inputPlanetNameValue: string) => {
  beforeEachTest(mockReasonForSparingValid);
  const user = userEvent.setup();
  const node = screen.getByRole("textbox");
  await user.type(node, inputPlanetNameValue);
  expect(screen.queryByText("ERROR")).not.toBeInTheDocument();
};

describe("Max Length Checking Error", () => {
  test("Max Length Checking Error", async () => {
    onChangeValidation(MOCKMAXLENGTHREASONFORSPARING);
  });
});

describe("Min Length Checking Error", () => {
  test("Min Length Checking Error", async () => {
    onChangeValidation(MOCKMINLENGTHREASONFORSPARING);
  });
});
