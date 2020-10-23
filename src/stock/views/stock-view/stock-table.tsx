import {Button, HTMLTable} from "@blueprintjs/core";
import React, {useCallback} from "react";
import {openDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {ProductsQuery, UpdateProductsMutationVariables} from "../../../main/lib/generated";
import UpdateProduct from "../../components/update-product";

export default function StockTable({data}: {data: Required<ProductsQuery["products"]>}) {
  const {dispatch} = useDrawerContext();
  const openProductForm = useCallback(
    (id: UpdateProductsMutationVariables["id"]) => {
      openDrawer(dispatch, {
        title: "Обновить продукт",
        body: <UpdateProduct id={id} />,
      });
    },
    [dispatch],
  );

  return (
    <HTMLTable>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <Button icon="edit" onClick={() => openProductForm(product.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
}
