import React, {useCallback} from "react";
import {
  OrderQueryVariables,
  useOrderQuery,
  useUpdateOrderMutation,
} from "../../../main/lib/generated";
import OrderForm from "../order-form";

interface UpdateOrderContainerProps {
  id: OrderQueryVariables["id"];
  onSuccess?: (id: OrderQueryVariables["id"]) => void;
}

export default function UpdateOrderContainer({id, onSuccess}: UpdateOrderContainerProps) {
  const [update] = useUpdateOrderMutation();
  const handleSubmit = useCallback(
    async values => {
      try {
        const {data} = await update({variables: {input: values, id}});
        const updatedOrderId = data?.updateOrder?.id;

        if (updatedOrderId) {
          onSuccess?.(updatedOrderId);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [id, onSuccess, update],
  );

  const {data} = useOrderQuery({variables: {id}});
  if (!data?.order) {
    return null;
  }

  return <OrderForm onSubmit={handleSubmit} defaultValues={data.order} />;
}
