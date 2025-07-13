import React from "react";

export const SearchBar = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <label htmlFor="check-btn">
        Only show products in stock
        <input type="checkbox" id="check-btn" />
      </label>
    </>
  );
};
