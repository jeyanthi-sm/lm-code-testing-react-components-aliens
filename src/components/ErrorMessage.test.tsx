import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";
describe("Testing Basic ErrorMessage Component", () => {
  test("Testing Basic ErrorMessage Component", () => {
    const ISVALIDVALUE: boolean = true;
    render(
      <ErrorMessage
        isValid={ISVALIDVALUE}
        message="ERROR! Testing Error Message"
      />
    );
    expect(screen.queryByText("ERROR")).toBeNull();
  });
});
