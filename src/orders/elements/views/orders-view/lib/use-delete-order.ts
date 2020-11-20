import {useCallback} from "react";
import useMessages from "../../../../../library/lib/use-messages";
import {useDeleteOrderMutation} from "../../../../../main/lib/generated";
import useRefetchOrders from "./use-refetch-orders";

export default function useDeleteOrder() {
  const {refetch} = useRefetchOrders();
  const message = useMessages();
  const [deleteMutation] = useDeleteOrderMutation();

  return useCallback(
    async (id: string) => {
      try {
        await deleteMutation({variables: {id}});
        message.success("Заказ успешно удален!");
        await refetch();
      } catch (e) {
        console.error(e);
      }
    },
    [deleteMutation, message, refetch],
  );
}
