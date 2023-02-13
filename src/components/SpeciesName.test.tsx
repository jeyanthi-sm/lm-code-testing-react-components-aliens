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
const MOCKMINLENGTHERRORSPECIESNAME = "N";
const MOCKNUMBERINSPECIESNAME = "1234";
const MOCKMAXLENGTHSPECIESNAME =
  "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio";
const MOCKSPECIALINSPECIESNAME = "$$$$$$";

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

const onChangeValidation = async (inputSpeciesNameValue: string) => {
  beforeEachTest();
  const user = userEvent.setup();
  const node = screen.getByRole("textbox");
  await user.type(node, inputSpeciesNameValue);
  expect(screen.queryByText("ERROR")).not.toBeInTheDocument();
};

describe("Min Length Checking Error", () => {
  test("Min Length Checking Error", async () => {
    onChangeValidation(MOCKMINLENGTHERRORSPECIESNAME);
  });
});

describe("Max Length Checking Error", () => {
  test("Max Length Checking Error", async () => {
    onChangeValidation(MOCKMAXLENGTHSPECIESNAME);
  });
});

describe("Test for Number", () => {
  test("Testfor Number", async () => {
    onChangeValidation(MOCKNUMBERINSPECIESNAME);
  });
});

describe("Test for Special Characters", () => {
  test("Testfor Special Characters 1", async () => {
    onChangeValidation(MOCKSPECIALINSPECIESNAME);
  });
});
