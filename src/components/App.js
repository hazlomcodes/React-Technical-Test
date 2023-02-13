import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import nasaImage from "../styles/images/nasa-logo.png";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="app">
      <img
        className="nasa-logo"
        src={nasaImage} alt="nasa"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults}/>
    </div>
  );
}

export default App;