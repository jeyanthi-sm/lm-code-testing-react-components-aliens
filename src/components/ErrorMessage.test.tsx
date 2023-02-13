import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";
describe("Testing Basic ErrorMessage Component", () => {
  test("Testing Basic ErrorMessage Component", () => {
    const messageToReturn = "ERROR! Testing Error Message";
    render(<ErrorMessage message={messageToReturn} />);
    expect(screen.getByText(messageToReturn)).toBeInTheDocument();
  });
});

describe("Passing Empty String To Basic ErrorMessage Component", () => {
  test("Testing Basic ErrorMessage Component", () => {
    const messageToReturn = undefined;
    render(<ErrorMessage message={messageToReturn} />);
    expect(screen.queryByText("ERROR!")).toBeNull();
  });
});
