import { render, screen } from "@testing-library/react";
import CustomInput, { CustomInputProps } from "../CustomInput";

import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

const mockReasonForSparingInput: CustomInputProps = {
  id: "ReasonForSparingId",
  name: "ReasonForSparing",
  type: "textarea",
  label: "Reason For Sparing ",
  value: "1",
  placeholder: "Reason For Sparing",
  onChangeHandler: mockFunction,
};

function beforeEachTest() {
  render(<CustomInput {...mockReasonForSparingInput} />);
}
const MOCKMAXLENGTHREASONFORSPARING =
  "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio";

const MOCKMINLENGTHREASONFORSPARING = "ABC";

const onChangeValidation = async (inputPlanetNameValue: string) => {
  beforeEachTest();
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
