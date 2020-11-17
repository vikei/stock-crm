import {useCallback} from "react";
import {useCreateOrderMutation} from "../../../main/lib/generated";
import OrderDto from "../../domain/dto/order.dto";
import OrderEntity from "../../domain/entities/orderEntity";

type UserCreateOrder = {
  onSuccess?: (order: OrderEntity) => void;
};

export default function useCreateOrder({onSuccess}: UserCreateOrder = {}) {
  const [createMutation] = useCreateOrderMutation({});

  const create = useCallback(
    async (input: OrderDto) => {
      const {data} = await createMutation({variables: {input}});
      const order = data!.createOrder!;
      onSuccess?.(order);
      return order;
    },
    [createMutation, onSuccess],
  );

  return {create};
}
