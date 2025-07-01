
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get("q") || "";
  });

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const trimmedQuery = query.trim();

      if (trimmedQuery !== "") {
        navigate(`/search?q=${trimmedQuery}`);
      } else if (location.pathname === "/search") {
        // If on /search and input is empty, reset the results
        navigate("/search");
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query, navigate, location]);

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
