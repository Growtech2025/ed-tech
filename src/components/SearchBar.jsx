// src/components/SearchBar.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== "") {
        navigate(`/search?q=${query}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <input
      type="text"
      placeholder="Search for books or courses..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
