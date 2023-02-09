import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  
  if (!results.length) {
    return <p>No results</p>
  }
  else{
    return (

      <div className="search-results">
        {results.map((image,index) => {
          return (
            <img 
            className="nasa-logo"
            src={"image"}
            alt={"nasaLogo"}
            key = {index}
            />
          )
        })
      } 

      </div>

      
      
  )
}}

export default SearchResults;
