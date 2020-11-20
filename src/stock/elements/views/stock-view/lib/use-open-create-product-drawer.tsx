import React, {useCallback} from "react";
import useDrawer, {openDrawer} from "../../../../../library/lib/use-drawer";
import CreateProductDrawer from "../../../components/create-product-drawer/create-product-drawer";
import useRefetchProducts from "./use-refetch-products";

export default function useOpenCreateProductDrawer() {
  const {dispatch} = useDrawer();
  const {refetch} = useRefetchProducts();

  return useCallback(() => {
    openDrawer(dispatch, {
      title: "Добавить продукт",
      body: <CreateProductDrawer onSuccess={refetch} />,
      width: "80vw",
    });
  }, [dispatch, refetch]);
}
