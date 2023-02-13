import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn()
  }

  it("renders correctly", () => {
    const { asFragment } = render(<Search setSearchResults={validProps.setSearchResults} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("button displays the correct text", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />)

    const button = screen.getAllByRole("button");

    expect(button).toHaveLength(1);
  });

  it("calls correct function by clicking submit button", async() => {
    render(<Search setSearchResults={validProps.setSearchResults} />)

    await fireEvent.click(screen.getByRole("button"));

    expect(validProps.setSearchResults).toHaveBeenCalled();
  })
});