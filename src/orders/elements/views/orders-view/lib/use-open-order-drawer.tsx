import React, {useCallback} from "react";
import useDrawer, {openDrawer} from "../../../../../library/lib/use-drawer";
import OrderEntity from "../../../../domain/entities/orderEntity";
import OrderDrawer from "../../../components/order-drawer/order-drawer";

export default function useOpenOrderDrawer() {
  const {dispatch} = useDrawer();

  return useCallback(
    ({id}: {id: OrderEntity["id"]}) => {
      openDrawer(dispatch, {
        title: `Заказ: #${id}`,
        width: "80vw",
        body: <OrderDrawer id={id} />,
      });
    },
    [dispatch],
  );
}
