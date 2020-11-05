import React, {useCallback} from "react";
import useFakeLocation from "../../../library/lib/use-fake-location";
import useDrawer, {closeDrawer} from "../../../library/lib/use-drawer";
import {ProductQueryVariables} from "../../../main/lib/generated";
import useProductMessage from "../../lib/use-product-message";
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
