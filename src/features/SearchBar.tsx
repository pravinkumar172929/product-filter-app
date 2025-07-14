import React from "react";

type SearchBarProps = {
  inStocksProduct: boolean;
  setInStocksProduct: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  setInStocksProduct,
  inStocksProduct,
}) => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search..." />
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
