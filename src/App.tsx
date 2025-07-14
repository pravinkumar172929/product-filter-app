import React, { useState } from "react";

import "./App.css";
import { SearchBar } from "./features/SearchBar";
import ProductTable from "./features/ProductTable";

import type { Product } from "./types/product";

const PRODUCTS: Product[] = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [inStocksProduct, setInStocksProduct] = useState(false);

  return (
    <>
      <SearchBar
        setInStocksProduct={setInStocksProduct}
        inStocksProduct={inStocksProduct}
      />
      <ProductTable products={PRODUCTS} inStocksProduct={inStocksProduct} />
    </>
  );
}

export default App;
