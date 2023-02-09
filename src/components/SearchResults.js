import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ searchResults }) => {
  return (
    <>
      <p>Search Results</p>

      {searchResults?.map((e) => console.log(e))}
      </>
  );
};

export default SearchResults;