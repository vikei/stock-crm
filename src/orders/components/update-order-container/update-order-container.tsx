import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import {
  OrderQueryVariables,
  useOrderQuery,
  useUpdateOrderMutation,
} from "../../../main/lib/generated";
import OrderForm from "../order-form";

interface UpdateOrderContainerProps {
  id: OrderQueryVariables["id"];
  onSuccess?: () => void;
}

export default function UpdateOrderContainer({id, onSuccess}: UpdateOrderContainerProps) {
  const history = useHistory();

  const [update] = useUpdateOrderMutation();
  const handleSubmit = useCallback(
    async values => {
      try {
        const {data} = await update({variables: {input: values, id}});
        if (onSuccess) {
          onSuccess();
        } else {
          history.push(`/orders/${data?.updateOrder?.id}`);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [history, id, onSuccess, update],
  );

  const {data} = useOrderQuery({variables: {id}});
  if (!data?.order) {
    return null;
  }

  return <OrderForm onSubmit={handleSubmit} defaultValues={data.order} />;
}
