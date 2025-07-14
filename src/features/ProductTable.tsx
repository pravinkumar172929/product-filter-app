import React from "react";
import type { Product } from "../types/product";

type ProductTableProps = {
  products: Product[];
  inStocksProduct: boolean;
  searchText: string;
};

// [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ]

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  inStocksProduct,
  searchText,
}) => {
  const groupProductsByCategory = products.reduce<Record<string, Product[]>>(
    (acc, currentProduct) => {
      if (!acc[currentProduct.category]) {
        acc[currentProduct.category] = [];
      }
      acc[currentProduct.category].push(currentProduct);
      return acc;
    },
    {}
  );

  //   string = the key (category name like "Fruits" or "Vegetables")
  //   Product[] = the value (an array of products in that category)
  //      built in in TS   ==>.     type Record<K extends keyof any, T> = {
  //   [P in K]: T;
  // };

  //   console.log(groupProductsByCategory);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupProductsByCategory).map(
            ([category, productItems]) => {
              const filteredItems = productItems.filter(
                (item) =>
                  (!inStocksProduct || item.stocked) &&
                  item.name
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase())
              );
              return (
                <React.Fragment key={category}>
                  <tr>
                    <th colSpan={2}>{category}</th>
                  </tr>
                  {filteredItems.map((filteredItem) => (
                    <tr
                      key={filteredItem.name}
                      style={{
                        color: !filteredItem.stocked ? "red" : "black",
                      }}
                    >
                      <td>{filteredItem.name}</td>
                      <td>{filteredItem.price}</td>
                    </tr>
                  ))}
                </React.Fragment>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
