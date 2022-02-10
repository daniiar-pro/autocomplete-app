import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css"
const SearchBar = () => {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder="Enter your book..." />
        <div className="searchIcon">
        <SearchIcon />
      </div>
      </div>
      
    </div>
  );
};

export default SearchBar;
