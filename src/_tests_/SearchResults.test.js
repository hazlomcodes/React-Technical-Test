import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search results", () => {
  const { asFragment } = render(<SearchResults />);

  it("render correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  })
})

it("renders `No results` if there is no result", () => {
  const validProps = [];
  render(<SearchResults results={validProps} />);
  const placeholderMessage = screen.getByText("No results");
  
  expect(placeholderMessage).toBeInTheDocument();
})