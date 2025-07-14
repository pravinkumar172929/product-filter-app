import React from "react";
import type { Product } from "../types/product";

type ProductTableProps = {
  products: Product[];
};

// [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ]

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
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

  console.log(groupProductsByCategory);

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
          <tr>
            <th colSpan={2}>Fruits</th>
          </tr>
          <tr>
            <td>Apple</td>
            <td>$1</td>
          </tr>
          <tr>
            <td>Dragonfruit</td>
            <td>$1</td>
          </tr>
          <tr>
            <td>Passionfruit</td>
            <td>$2</td>
          </tr>

          <tr>
            <th colSpan={2}>Vegetables</th>
          </tr>
          <tr>
            <td>Spinach</td>
            <td>$2</td>
          </tr>
          <tr>
            <td>Pumpkin</td>
            <td>$4</td>
          </tr>
          <tr>
            <td>Peas</td>
            <td>$1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
