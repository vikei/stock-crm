import React, {useCallback} from "react";
import useFakeLocation from "../../../library/lib/use-fake-location";
import {closeDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {OrderQueryVariables} from "../../../main/lib/generated";
import useOrderMessage from "../../lib/use-show-order-message";
import UpdateOrderContainer from "../update-order-container";

interface UpdateOrderDrawerProps {
  id: OrderQueryVariables["id"];
}

export default function UpdateOrderDrawer({id}: UpdateOrderDrawerProps) {
  useFakeLocation(`/orders/${id}/update`);

  const {dispatch: drawerDispatch} = useDrawerContext();
  const message = useOrderMessage();
  const handleSuccess = useCallback(async () => {
    closeDrawer(drawerDispatch);
    message(id);
  }, [drawerDispatch, id, message]);

  return <UpdateOrderContainer id={id} onSuccess={handleSuccess} />;
}
