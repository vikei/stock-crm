import React, {useCallback} from "react";
import useFakeLocation from "../../../library/lib/use-fake-location";
import {closeDrawer, useDrawer} from "../../../main/lib/drawer-context";
import {ProductQueryVariables} from "../../../main/lib/generated";
import useProductMessage from "../../lib/use-show-product-message";
import UpdateProductContainer from "../update-product-container";

interface UpdateProductDrawerProps {
  id: ProductQueryVariables["id"];
}

export default function UpdateProductDrawer({id}: UpdateProductDrawerProps) {
  useFakeLocation(`/stock/product/${id}/update`);

  const {dispatch: drawerDispatch} = useDrawer();
  const message = useProductMessage();
  const handleSuccess = useCallback(async () => {
    closeDrawer(drawerDispatch);
    message(id);
  }, [drawerDispatch, id, message]);

  return <UpdateProductContainer id={id} onSuccess={handleSuccess} />;
}
