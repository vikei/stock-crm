import React, {useCallback} from "react";
import {OrderQueryVariables, useCreateOrderMutation} from "../../../main/lib/generated";
import OrderForm from "../order-form";

interface CreateOrderContainerProps {
  onSuccess?: (id: OrderQueryVariables["id"]) => void;
}

export default function CreateOrderContainer({onSuccess}: CreateOrderContainerProps) {
  const [createMutation] = useCreateOrderMutation();

  const handleSubmit = useCallback(
    async values => {
      try {
        const {data} = await createMutation({variables: {input: values}});
        const id = data?.createOrder?.id;
        if (id) {
          onSuccess?.(id);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [createMutation, onSuccess],
  );

  return <OrderForm onSubmit={handleSubmit} />;
}
