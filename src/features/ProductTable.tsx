import React from "react";
import type { Product } from "../types/product";

type ProductTableProps = {
  products: Product[];
  inStocksProduct: boolean;
  searchText: string;
};

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  inStocksProduct,
  searchText,
}) => {
  const groupedProductsByCategory = products.reduce<Record<string, Product[]>>(
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
          {Object.entries(groupedProductsByCategory).map(
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
