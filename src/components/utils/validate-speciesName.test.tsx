import { render, screen } from "@testing-library/react";
import CustomInput, { CustomInputProps } from "../CustomInput";

import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

const mockCustomInput: CustomInputProps = {
  id: "SpeciesNameId",
  name: "SpeciesName",
  type: "text",
  label: "Species Name ",
  value: "human",
  placeholder: "SpeciesName",
  onChangeHandler: mockFunction,
};

const MOCKMINLENGTHERRORSPECIESNAME = "N";
const MOCKNUMBERINSPECIESNAME = "1234";
const MOCKMAXLENGTHSPECIESNAME =
  "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio";
const MOCKSPECIALINSPECIESNAME = "$$$$$$";

function beforeEachTest() {
  render(<CustomInput {...mockCustomInput} />);
}

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
