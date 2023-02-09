import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
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

test("PlanetName capture the changes", async () => {
  beforeEachTest();
  mockFunction();

  const node = screen.getByDisplayValue("Earth");
  const planetNewName = "Mars";
  const user = userEvent.setup();

  await user.type(node, planetNewName);

  expect(mockFunction).toHaveBeenCalledTimes(5);
});
