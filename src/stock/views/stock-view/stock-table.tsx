import {ApolloQueryResult} from "@apollo/client";
import {HTMLTable} from "@blueprintjs/core";
import React from "react";
import {ProductsQuery} from "../../../main/lib/generated";
import StockTableActions from "./stock-table-actions";

interface StockTableProps {
  data: Required<ProductsQuery["products"]>;
  refetchProducts: () => Promise<ApolloQueryResult<ProductsQuery>>;
}

export default function StockTable({data, refetchProducts}: StockTableProps) {
  return (
    <HTMLTable width="100%" interactive bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
          <th>Склад</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data?.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.stockCount}</td>
            <td>
              <StockTableActions
                refetchProducts={refetchProducts}
                id={product.id}
                name={product.name}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
}
