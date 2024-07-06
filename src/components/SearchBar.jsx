import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="bg-slate-400  flex justify-center items-center ">
      <div className="bg-white flex items-center p-3 m-5 rounded-full">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="outline-none"
        />
        <FaSearch onClick={handleSearch} className="text-xl hover:scale-125 cursor-pointer duration-500"/>
      </div>
      
    </div>
  );
};

export default SearchBar;
