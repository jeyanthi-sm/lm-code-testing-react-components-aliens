import { cleanup, fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Button from "./Button";

test("captures clicks", (done) => {
  function handleClick() {
    done();
  }
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
  const node = screen.getByText("Click Me");
  fireEvent.click(node);
});

afterEach(cleanup);
