import { render, screen } from "@testing-library/react";
import CustomInput, { CustomInputProps } from "../CustomInput";

import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

const mockNumberOfBeingsInput: CustomInputProps = {
  id: "NumberOfBeingsId",
  name: "Number of Beings",
  type: "text",
  label: "Number of Beings ",
  value: "1",
  placeholder: "Number of Beings",
  onChangeHandler: mockFunction,
};

function beforeEachTest() {
  render(<CustomInput {...mockNumberOfBeingsInput} />);
}
const MOCKMINNUMBEROFSPECIES = "99999999";

const onChangeValidation = async (inputNumberOfBeingsValue: string) => {
  beforeEachTest();
  const user = userEvent.setup();
  const node = screen.getByDisplayValue(1);
  await user.type(node, inputNumberOfBeingsValue);
  expect(screen.queryByText("ERROR")).not.toBeInTheDocument();
};

describe("Min Value Checking Error", () => {
  test("Min Value Checking Error", async () => {
    onChangeValidation(MOCKMINNUMBEROFSPECIES);
  });
});
