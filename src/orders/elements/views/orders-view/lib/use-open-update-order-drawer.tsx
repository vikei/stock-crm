import React, {useCallback} from "react";
import useDrawer, {openDrawer} from "../../../../../library/lib/use-drawer";
import OrderEntity from "../../../../domain/entities/orderEntity";
import UpdateOrderDrawer from "../../../components/update-order-drawer/update-order-drawer";

export default function useOpenUpdateOrderDrawer() {
  const {dispatch} = useDrawer();

  return useCallback(
    (id: OrderEntity["id"]) => {
      openDrawer(dispatch, {
        title: `Заказ: #${id}`,
        width: "80vw",
        body: <UpdateOrderDrawer id={id} />,
      });
    },
    [dispatch],
  );
}
