import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import PlanetName from "../components/PlanetName";

test("captures1 changes", (done) => {
  function handleChange(evt: { target: { value: any } }) {
    expect(evt.target.value).toEqual("New Value");
    console.log("Yes equal");
    done();
  }
  const { getByPlaceholderText } = render(
    <PlanetName onChange={handleChange} placeholder="Old Value" />
  );
  const node = screen.getByPlaceholderText("Old Value");
  fireEvent.change(node, { target: { value: "New Value" } });
});
