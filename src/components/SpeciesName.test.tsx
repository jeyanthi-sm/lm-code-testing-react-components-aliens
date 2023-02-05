/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import SpeciesName from "./SpeciesName";

test("Existence of Species Name on the Screen", () => {
  const speciesName = "human";
  const speciesNameLabelText = "Species Name";

  render(<SpeciesName speciesName={speciesName} />);

  expect(screen.getByLabelText(speciesNameLabelText)).toBeInTheDocument();
});

test("Passed Value of Species Name Displayed Correctly", () => {
  const speciesName = "human";
  const speciesNameText = "human";

  render(<SpeciesName speciesName={speciesName} />);

  expect(screen.getByDisplayValue(speciesNameText)).toBeInTheDocument();
});
