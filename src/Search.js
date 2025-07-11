import React from "react";
import "tachyons";

const Search = () => {
  return (
    <div className="pa3">
      <input
        className="pa3 w-200 bg-light-green bw2 black mt4"
        type="search"
        placeholder="Enter any letter "
      ></input>
    </div>
  );
};

export default Search;
