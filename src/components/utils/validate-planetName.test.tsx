import { render, screen } from "@testing-library/react";
import CustomInput, { CustomInputProps } from "../CustomInput";

import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

const mockPlanetNameInput: CustomInputProps = {
  id: "PlanetNameId",
  name: "PlanetName",
  type: "text",
  label: "Planet Name ",
  value: "Earth",
  placeholder: "PlanetName",
  onChangeHandler: mockFunction,
};

function beforeEachTest() {
  render(<CustomInput {...mockPlanetNameInput} />);
}

const MOCKMINLENGTHERRORPLANETNAME = "N";
const MOCKNUMBERINPLANETNAME = "1234";
const MOCKMAXLENGTHPLANETNAME =
  "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio";
const MOCKSPECIALINPLANETNAME = "^^^^^^^^^^";

const onChangeValidation = async (inputPlanetNameValue: string) => {
  beforeEachTest();
  const user = userEvent.setup();
  const node = screen.getByRole("textbox");
  await user.type(node, inputPlanetNameValue);
  expect(screen.queryByText("ERROR")).not.toBeInTheDocument();
};

describe("Min Length Checking Error", () => {
  test("Min Length Checking Error", async () => {
    onChangeValidation(MOCKMINLENGTHERRORPLANETNAME);
  });
});

describe("Max Length Checking Error", () => {
  test("Max Length Checking Error", async () => {
    onChangeValidation(MOCKMAXLENGTHPLANETNAME);
  });
});

describe("Test for Number", () => {
  test("Testfor Number", async () => {
    onChangeValidation(MOCKNUMBERINPLANETNAME);
  });
});

describe("Test for Special Characters", () => {
  test("Testfor Special Characters 1", async () => {
    onChangeValidation(MOCKSPECIALINPLANETNAME);
  });
});
