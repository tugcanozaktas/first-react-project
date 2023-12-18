import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const searchText = "Lefkoşa";
  const setSearchText = () => {};
  const onSubmit = () => {};

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={onSubmit}
      />,
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("has correct button text", () => {
    const { getByText } = render(
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={onSubmit}
      />,
    );
    expect(getByText("Search")).toHaveClass("search-form__button");
  });
});
