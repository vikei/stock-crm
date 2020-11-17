import {useCallback} from "react";
import {useUpdateOrderMutation} from "../../../main/lib/generated";
import OrderDto from "../../domain/dto/order.dto";
import OrderEntity from "../../domain/entities/orderEntity";

interface UseUpdateOrder {
  onSuccess?: (data: OrderEntity) => void;
}

export default function useUpdateOrder({onSuccess}: UseUpdateOrder = {}) {
  const [updateMutation] = useUpdateOrderMutation();
  const update = useCallback(
    async (id: OrderEntity["id"], values: OrderDto) => {
      try {
        const {data} = await updateMutation({variables: {input: values, id}});
        const order = data!.updateOrder!;
        onSuccess?.(order);
        return order;
      } catch (e) {
        console.error(e);
      }
    },
    [onSuccess, updateMutation],
  );

  return {update};
}
