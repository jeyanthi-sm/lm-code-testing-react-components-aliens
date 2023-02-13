import { render, screen } from "@testing-library/react";
import PlanetName, { PlanetNameProps } from "../components/PlanetName";
import userEvent from "@testing-library/user-event";
const mockFunction = jest.fn(() => {
  console.log("mock function called ");
  return "4";
});
const mockPlanetName: PlanetNameProps = {
  placeholder: "PlanetName",
  onChangeHandler: mockFunction,
  value: "Earth",
};
function beforeEachTest() {
  render(<PlanetName {...mockPlanetName} />);
}

test("Existence of Planet Name in the screeen", () => {
  beforeEachTest();
  expect(screen.getByLabelText("Planet Name")).toBeInTheDocument();
});

test("Planet Name Passed Value Displayed correctly in the screeen", () => {
  beforeEachTest();
  expect(screen.getByDisplayValue(mockPlanetName.value)).toBeInTheDocument();
});

test("PlanetName capture the changes", async () => {
  beforeEachTest();
  mockFunction();

  const node = screen.getByDisplayValue("Earth");
  const planetNewName = "Mars";
  const user = userEvent.setup();

  await user.type(node, planetNewName);

  expect(mockFunction).toHaveBeenCalledTimes(5);
});

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
