import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
const SearchBar = ({ data }) => {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder="Enter your book..." />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="dataResult">
        {data.map((book) => {
          return (
            <a className="dataItem" href={book.link} target="_blank">
              <p>{book.title}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
