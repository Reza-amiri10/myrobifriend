import React from "react";
import "tachyons";

const Search = ({ setChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa2 w-200 bg-light-green black mt1"
        type="search"
        placeholder="Enter any letter "
        onChange={setChange}
      ></input>
    </div>
  );
};

export default Search;
