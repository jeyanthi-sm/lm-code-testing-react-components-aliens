import { render, screen } from "@testing-library/react";
import SpeciesName, { SpeciesNameProps } from "./SpeciesName";

import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn(() => "9");

const mockSpeciesName: SpeciesNameProps = {
  id: "SpeciesNameId",
  type: "SpeciesName",
  value: "human",
  placeholder: "Species Name",
  onChangeHandler: mockFunction,
};

function beforeEachTest() {
  render(<SpeciesName {...mockSpeciesName} />);
}
test("Existence of Species Name on the Screen", () => {
  beforeEachTest();
  expect(screen.getByLabelText("Species Name")).toBeInTheDocument();
  expect(screen.getByDisplayValue(mockSpeciesName.value)).toBeInTheDocument();
});

test("Passed Value of Species Name Displayed Correctly", () => {
  beforeEachTest();
  expect(screen.getByDisplayValue(mockSpeciesName.value)).toBeInTheDocument();
});

test("captures renew changes", async () => {
  beforeEachTest();
  const speciesNewName = "New Value";
  const user = userEvent.setup();

  const node = screen.getByRole("textbox");

  await user.type(node, speciesNewName);

  expect(mockFunction).toHaveBeenCalledTimes(9);
});
