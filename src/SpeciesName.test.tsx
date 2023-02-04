/* eslint-disable testing-library/no-node-access */
import {
  cleanup,
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
} from "@testing-library/react";
import { doesNotMatch } from "assert";
import SpeciesName, { SpeciesNameProps } from "./components/SpeciesName";
import W12MForm from "./components/W12MForm";

test("renders Species Name Label Correctly", () => {
  const speciesName = "human";
  const onChangeHandler = () => {};
  const speciesNameLabelText = new RegExp(/Species Name/i);

  render(
    <SpeciesName speciesName={speciesName} onChangeHandler={onChangeHandler} />
  );
  expect(screen.getByLabelText(speciesNameLabelText)).toBeInTheDocument();
});

test("renders Species Name Value Correctly", () => {
  const speciesName = "human";
  const changeHandler = () => {};
  const speciesNameText = new RegExp(/human/i);

  render(
    <SpeciesName speciesName={speciesName} onChangeHandler={changeHandler} />
  );

  expect(screen.getByLabelText(speciesNameText)).toBeInTheDocument();
});

test("Species Name Change Event Test", () => {
  const testing = "human";
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.value = "Demon";
  }

  const { getByText, getByTestId } = render(
    <SpeciesName speciesName={testing} onChangeHandler={handleChange} />
  );
  const input = screen.getByText("human");

  fireEvent.change(input, {
    target: { value: "Demon" },
  });
  console.log(input);
  expect(screen.getByDisplayValue("Demon")).toBeInTheDocument();
});
