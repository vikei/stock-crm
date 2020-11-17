import {useHistory} from "react-router-dom";
import OrderEntity from "../../../domain/entities/orderEntity";
import useUpdateOrder from "../../hooks/use-update-order";

interface UseHandleUpdateOrder {
  onSuccess?: (data: OrderEntity) => void;
}

export default function useHandleUpdateOrder({onSuccess}: UseHandleUpdateOrder = {}) {
  const history = useHistory();
  const {update} = useUpdateOrder({
    onSuccess: order => {
      history.push(`/orders/${order.id}`);
      onSuccess?.(order);
    },
  });

  return {handleUpdateOrder: update};
}
