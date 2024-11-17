import React, { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import { CiSearch } from "react-icons/ci";

export const SearchInput = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleChange = (e) => {
    const value = e.target.value;
    const digitCount = (value.match(/\d/g) || []).length;
    const letterCount = (value.match(/[a-zA-Z]/g) || []).length;

    // Allow letters and numbers, but restrict digits to a maximum of 12
    if (digitCount <= 12 && letterCount <= 35) {
      setSearchTerm(value);
    }
  };
  useEffect(() => {
    return () => setSearchTerm("");
  }, [setSearchTerm]);
  return (
    <div className="relative">
      <input
        type="text"
        className="border h-10 rounded-md w-80 px-3"
        placeholder="Search here"
        value={searchTerm}
        onChange={handleChange}
      />
      <CiSearch className="absolute right-3 top-3" />
    </div>
  );
};

export const highlightText = (text, searchTerm) => {
  const stringText = String(text);
  if (!searchTerm) return text; // Return original text if no search term

  const parts = stringText.split(new RegExp(`(${searchTerm})`, "gi")); // Split by the search term, case insensitive
  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} className="text-blue-600 font-bold">
        {part}
      </span> // Highlight matching part
    ) : (
      part // Return non-matching part unchanged
    )
  );
};
