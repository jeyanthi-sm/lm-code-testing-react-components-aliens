/* eslint-disable testing-library/no-node-access */
import { cleanup, render, screen } from "@testing-library/react";
import SpeciesName, { SpeciesNameProps } from "./components/SpeciesName";
import W12MForm from "./components/W12MForm";

test("renders Species Name Label Correctly", () => {
  const speciesName = "human";
  const speciesNameLabelText = new RegExp(/Species Name/i);
  cleanup();
  render(<SpeciesName speciesName={speciesName} />);
  expect(screen.getByLabelText(speciesNameLabelText)).toBeInTheDocument();
  cleanup();
});

test("renders Species Name Value Correctly", () => {
  const speciesName = "human";
  const speciesNameText = new RegExp(/human/i);
  cleanup();
  render(<SpeciesName speciesName={speciesName} />);

  expect(screen.getByDisplayValue(speciesNameText)).toBeInTheDocument();
  cleanup();
});
