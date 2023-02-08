import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search results", () => {
  const { asFragment } = render(<SearchResults />);

  it("render correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  })
})