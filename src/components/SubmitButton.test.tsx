import { cleanup, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";
import userEvent from "@testing-library/user-event";
const mockFunction = jest.fn();
function handleClick() {
  mockFunction();
}
describe("Submit Button Existence", () => {
  test("Presence of Submit Button", async () => {
    render(<SubmitButton onClickHandler={handleClick} />);
    expect(screen.getByText("Submit Form")).toBeInTheDocument();
  });
});

describe("Submit Button Testing Click", () => {
  test("captures clicks", async () => {
    render(<SubmitButton onClickHandler={handleClick} />);
    const node = screen.getByText("Submit Form");
    const user = userEvent.setup();

    await userEvent.click(node);

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
