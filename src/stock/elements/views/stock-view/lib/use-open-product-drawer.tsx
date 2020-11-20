import React, {useCallback} from "react";
import useDrawer, {openDrawer} from "../../../../../library/lib/use-drawer";
import ProductEntity from "../../../../domain/entities/product.entity";
import ProductDrawer from "../../../components/product-drawer/product-drawer";

export default function useOpenProductDrawer() {
  const {dispatch} = useDrawer();

  return useCallback(
    ({id, name}: {id: ProductEntity["id"]; name: ProductEntity["name"]}) => {
      openDrawer(dispatch, {
        title: name,
        width: "80vw",
        body: <ProductDrawer id={id} />,
      });
    },
    [dispatch],
  );
}
