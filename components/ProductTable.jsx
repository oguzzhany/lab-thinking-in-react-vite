import { useState } from "react";
import jsonData from "../src/data.json";
import ProductRow from "./ProductRow";

function ProductTable() {
  const [table, setTable] = useState();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow />
      </table>
    </div>
  );
}

export default ProductTable;
