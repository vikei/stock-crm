import React, {useCallback} from "react";
import useDrawer, {openDrawer} from "../../../../../library/lib/use-drawer";
import ProductEntity from "../../../../domain/entities/product.entity";
import UpdateProductDrawer from "../../../components/update-product-drawer/update-product-drawer";

export default function useOpenUpdateProductDrawer() {
  const {dispatch} = useDrawer();

  return useCallback(
    ({id, name}: {id: ProductEntity["id"]; name: ProductEntity["name"]}) => {
      openDrawer(dispatch, {
        title: `Продукт: ${name}`,
        width: "80vw",
        body: <UpdateProductDrawer id={id} />,
      });
    },
    [dispatch],
  );
}
