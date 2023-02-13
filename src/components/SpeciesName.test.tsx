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
const mockMinLengthErrorSpeciesName: SpeciesNameProps = {
  id: "SpeciesNameId",
  type: "SpeciesName",
  value: "N",
  placeholder: "Species Name",
  onChangeHandler: mockFunction,
};
const mockNumberInSpeciesName: SpeciesNameProps = {
  id: "SpeciesNameId",
  type: "SpeciesName",
  value: "1234",
  placeholder: "Species Name",
  onChangeHandler: mockFunction,
};

const mockMaxLengthSpeciesName: SpeciesNameProps = {
  id: "SpeciesNameId",
  type: "SpeciesName",
  value:
    "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio",
  placeholder: "Species Name",
  onChangeHandler: mockFunction,
};
const mockSpecialInSpeciesName: SpeciesNameProps = {
  id: "SpeciesNameId",
  type: "SpeciesName",
  value: "$$$$$$$",
  placeholder: "Species Name",
  onChangeHandler: mockFunction,
};
function beforeEachTest() {
  render(<SpeciesName {...mockSpeciesName} />);
}
describe("Existence of Species Name on the screen", () => {
  test("Existence of Species Name on the Screen", () => {
    beforeEachTest();
    expect(screen.getByLabelText("Species Name")).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockSpeciesName.value)).toBeInTheDocument();
  });
});
describe("Passed Value of Species Name Displayed Correctly", () => {
  test("Passed Value of Species Name Displayed Correctly", () => {
    beforeEachTest();
    expect(screen.getByDisplayValue(mockSpeciesName.value)).toBeInTheDocument();
  });
});
describe("captures renew changes", () => {
  test("captures renew changes", async () => {
    //onChangeValidation("New Value");
    beforeEachTest();
    const speciesNewName = "New Value";
    const user = userEvent.setup();

    const node = screen.getByRole("textbox");

    await user.type(node, speciesNewName);

    expect(mockFunction).toHaveBeenCalledTimes(9);
  });
});

const onChangeValidation = async (inputSpeciesName: SpeciesNameProps) => {
  beforeEachTest();
  const user = userEvent.setup();
  const node = screen.getByRole("textbox");
  await user.type(node, inputSpeciesName.value);
  expect(screen.queryByText("ERROR")).not.toBeInTheDocument();
};

describe("Min Length Checking Error", () => {
  test("Min Length Checking Error", async () => {
    onChangeValidation(mockMinLengthErrorSpeciesName);
  });
});

describe("Max Length Checking Error", () => {
  test("Max Length Checking Error", async () => {
    onChangeValidation(mockMaxLengthSpeciesName);
  });
});

describe("Test for Number", () => {
  test("Testfor Number", async () => {
    onChangeValidation(mockNumberInSpeciesName);
  });
});

describe("Test for Special Characters", () => {
  test("Testfor Special Characters 1", async () => {
    onChangeValidation(mockSpecialInSpeciesName);
  });
});
