import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import {OrderQueryVariables, useCreateOrderMutation} from "../../../main/lib/generated";
import OrderForm from "../order-form";

interface CreateOrderContainerProps {
  onSuccess?: (id: OrderQueryVariables["id"]) => void;
}

export default function CreateOrderContainer({onSuccess}: CreateOrderContainerProps) {
  const history = useHistory();
  const [createOrder] = useCreateOrderMutation();

  const handleSubmit = useCallback(
    async values => {
      try {
        const {data} = await createOrder({variables: {input: values}});
        const id = data?.createOrder?.id;

        if (!id) {
          return;
        }

        if (onSuccess) {
          onSuccess(id);
        } else {
          history.push(`/orders/${id}`);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [createOrder, history, onSuccess],
  );

  return <OrderForm onSubmit={handleSubmit} />;
}
