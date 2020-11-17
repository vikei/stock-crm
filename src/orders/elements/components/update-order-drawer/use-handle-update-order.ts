import useDrawer, {closeDrawer} from "../../../../library/lib/use-drawer";
import OrderEntity from "../../../domain/entities/orderEntity";
import useOrderMessage from "../../hooks/use-order-message";
import useUpdateOrder from "../../hooks/use-update-order";

interface UseHandleUpdateOrder {
  onSuccess?: (data: OrderEntity) => void;
}

export default function useHandleUpdateOrder({onSuccess}: UseHandleUpdateOrder = {}) {
  const {dispatch} = useDrawer();
  const message = useOrderMessage();

  const {update} = useUpdateOrder({
    onSuccess: order => {
      closeDrawer(dispatch);
      message(order.id);
      onSuccess?.(order);
    },
  });

  return {handleUpdateOrder: update};
}
