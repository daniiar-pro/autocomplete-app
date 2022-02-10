import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";
import ClearIcon from '@mui/icons-material/Clear';
const SearchBar = ({ inputValue, func, filteredBooks, handleClick }) => {
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter your book..."
          onChange={func}
          value={inputValue}
        />
        <div className="searchIcon">
            {!inputValue ? (
                 <SearchIcon />
            ) : (
                <ClearIcon onClick={handleClick}/>
            )}
         
        </div>
      </div>
      {filteredBooks.length > 0 ? (
        <div className="dataResult">
          {filteredBooks.slice(0, 10).map((book) => {
            return (
              <a className="dataItem" href={book.link} target="_blank">
                <p>{book.title}</p>
              </a>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
