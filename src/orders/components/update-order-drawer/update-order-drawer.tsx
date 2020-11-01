import React, {useCallback, useEffect} from "react";
import {goBackFromFakeLocation, goToFakeLocation} from "../../../library/utils/fake-history";
import {closeDrawer, useDrawerContext} from "../../../main/lib/drawer-context";
import {
  OrderInput,
  OrderQueryVariables,
  useOrderQuery,
  useUpdateOrderMutation,
} from "../../../main/lib/generated";
import OrderForm from "../order-form";

interface UpdateOrderDrawerProps {
  id: OrderQueryVariables["id"];
}

export default function UpdateOrderDrawer({id}: UpdateOrderDrawerProps) {
  useEffect(() => {
    goToFakeLocation(`/order/${id}/update`);

    return () => {
      goBackFromFakeLocation();
    };
  }, [id]);

  const [updateOrder] = useUpdateOrderMutation({
    onCompleted: () => {
      closeDrawer(dispatch);
    },
  });
  const {dispatch} = useDrawerContext();
  const handleSubmit = useCallback(
    async (values: OrderInput) => {
      try {
        await updateOrder({variables: {input: values, id}});
      } catch (e) {
        console.error(e);
      }
    },
    [id, updateOrder],
  );

  const {data} = useOrderQuery({variables: {id}});
  if (!data?.order) {
    return null;
  }

  return <OrderForm onSubmit={handleSubmit} defaultValues={data.order} />;
}
