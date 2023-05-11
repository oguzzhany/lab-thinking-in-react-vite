import { useState } from "react";
import jsonData from "../src/data.json";

function ProductRow() {
  const [row, setRow] = useState();

  return (
    <tbody>
      {jsonData.map((product) => (
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default ProductRow;
