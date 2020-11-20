import React, {useCallback} from "react";
import {useParams} from "react-router-dom";
import {AppContent} from "../../../../main/components/app-layout";
import OrderForm from "../../components/order-form";
import OrderValues from "../../components/order-form/order-values";
import useOrder from "../../hooks/use-order";
import useHandleUpdateOrder from "./use-handle-update-order";

export default function UpdateOrderView() {
  const {id} = useParams<{id: string}>();

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

  return (
    <AppContent title={`Изменить продукт #${id}`}>
      <OrderForm defaultValues={data} onSubmit={handleSubmit} />
    </AppContent>
  );
}
