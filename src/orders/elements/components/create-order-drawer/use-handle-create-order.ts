import useDrawer, {closeDrawer} from "../../../../library/lib/use-drawer";
import OrderEntity from "../../../domain/entities/orderEntity";
import useCreateOrder from "../../hooks/use-create-order";
import useOrderMessage from "../../hooks/use-order-message";

type UseHandleCreateOrder = {
  onSuccess?: (order: OrderEntity) => void;
};

export default function useHandleCreateOrder({onSuccess}: UseHandleCreateOrder = {}) {
  const {dispatch: drawerDispatch} = useDrawer();
  const message = useOrderMessage();

  const {create} = useCreateOrder({
    onSuccess: order => {
      closeDrawer(drawerDispatch);
      message(order.id);
      onSuccess?.(order);
    },
  });

  return {handleCreateOrder: create};
}
