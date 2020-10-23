import {HTMLTable} from "@blueprintjs/core";
import React from "react";
import {ProductsQuery} from "../../../main/lib/generated";

export default function StockTable({data}: {data: Required<ProductsQuery["products"]>}) {
  return (
    <HTMLTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {data.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
}
