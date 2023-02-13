import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {

  if (!results?.length) {
    return <p>No results</p>;
  } else {
    return (
      <div className="search-results">
        {results.map((image, index) => {
          return (
            <img
              className="search-results__image"
              src={image}
              alt="space_image"
              key={index}
            />
          );
        }
       )}
        </div>
    );
  }
}; 

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
};

  
export default SearchResults;
