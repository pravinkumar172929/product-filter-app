import React from "react";

type SearchBarProps = {
  inStocksProduct: boolean;
  setInStocksProduct: React.Dispatch<React.SetStateAction<boolean>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({
  setInStocksProduct,
  inStocksProduct,
  searchText,
  setSearchText,
}) => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <label htmlFor="check-btn">
        Only show products in stock
        <input
          type="checkbox"
          id="check-btn"
          checked={inStocksProduct}
          onChange={(e) => setInStocksProduct(e.target.checked)}
        />
      </label>
    </>
  );
};
export default SearchBar;
