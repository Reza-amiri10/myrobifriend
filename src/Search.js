import React from "react";
import "tachyons";

const Search = ({ setChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 w-200 bg-light-green bw2 black mt4"
        type="search"
        placeholder="Enter any letter "
        onChange={setChange}
      ></input>
    </div>
  );
};

export default Search;
