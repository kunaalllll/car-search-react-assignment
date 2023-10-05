import React, { useState } from "react";

const Search = ({ carData, setFilteredResults }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log("log1", searchInput);
    if (searchInput !== "") {
      const filteredData = carData.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log("log2", filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(carData);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => searchItems(e.target.value)}
    />
  );
};

export default Search;
