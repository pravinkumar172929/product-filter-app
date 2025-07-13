import React from "react";

const ProductTable = () => {
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
