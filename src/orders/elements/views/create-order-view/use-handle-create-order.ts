import {useHistory} from "react-router-dom";
import OrderEntity from "../../../domain/entities/orderEntity";
import useCreateOrder from "../../hooks/use-create-order";

type UseHandleCreateOrder = {
  onSuccess?: (order: OrderEntity) => void;
};

export default function useHandleCreateOrder({onSuccess}: UseHandleCreateOrder) {
  const history = useHistory();

  const {create} = useCreateOrder({
    onSuccess: order => {
      history.push(`/orders/${order.id}`);
      onSuccess?.(order);
    },
  });

  return {handleCreateOrder: create};
}
