import NumberOfBeings, { NumberOfBeingsProps } from "./NumberOfBeings";
import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

const mockNumberOfBeings: NumberOfBeingsProps = {
  value: 1,
  placeholder: "Number of Beings",
  onChangeHandler: mockFunction,
};

function beforeEachTest() {
  render(<NumberOfBeings {...mockNumberOfBeings} />);
}

test("Existence of Number of Beings in the screeen", () => {
  beforeEachTest();
  expect(screen.getByLabelText("Number of Beings")).toBeInTheDocument();
});

test("Number of Beings Passed Value Displayed correctly in the screeen", () => {
  beforeEachTest();
  expect(
    screen.getByDisplayValue(mockNumberOfBeings.value)
  ).toBeInTheDocument();
});

test("Capture Changes Correctly", async () => {
  const numberOfBeingsNewValue = "786";
  beforeEachTest();
  mockFunction();
  const node = screen.getByDisplayValue(1);
  const user = userEvent.setup();
  await user.type(node, numberOfBeingsNewValue);

  expect(mockFunction).toHaveBeenCalledTimes(4);
});

const MOCKMINNUMBEROFSPECIES = "99999999";

const onChangeValidation = async (inputNumberOfBeingsValue: string) => {
  beforeEachTest();
  const user = userEvent.setup();
  const node = screen.getByDisplayValue(1);
  await user.type(node, inputNumberOfBeingsValue);
  expect(screen.queryByText("ERROR")).not.toBeInTheDocument();
};

describe("Min Value Checking Error", () => {
  test("Min Value Checking Error", async () => {
    onChangeValidation(MOCKMINNUMBEROFSPECIES);
  });
});
