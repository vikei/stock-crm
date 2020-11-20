import React, {useCallback} from "react";
import useFakeLocation from "../../../../library/lib/use-fake-location";
import OrderEntity from "../../../domain/entities/orderEntity";
import useOrder from "../../hooks/use-order";
import OrderForm from "../order-form";
import OrderValues from "../order-form/order-values";
import useHandleUpdateOrder from "./use-handle-update-order";

interface UpdateOrderDrawerProps {
  id: OrderEntity["id"];
}

export default function UpdateOrderDrawer({id}: UpdateOrderDrawerProps) {
  useFakeLocation(`/orders/${id}/update`);

  const {handleUpdateOrder} = useHandleUpdateOrder();
  const handleSubmit = useCallback(
    async (values: OrderValues) => {
      await handleUpdateOrder(id, values);
    },
    [handleUpdateOrder, id],
  );

  const {data} = useOrder({id});
  if (!data) {
    return null;
  }

  return <OrderForm defaultValues={data} onSubmit={handleSubmit} />;
}
