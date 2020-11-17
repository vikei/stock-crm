import useDrawer, {closeDrawer} from "../../../../library/lib/use-drawer";
import useOrderMessage from "../../hooks/use-order-message";
import useUpdateOrder from "../../hooks/use-update-order";

export default function useHandleUpdateOrder() {
  const {dispatch} = useDrawer();
  const message = useOrderMessage();

  const {update} = useUpdateOrder({
    onSuccess: order => {
      closeDrawer(dispatch);
      message(order.id);
    },
  });

  return {handleUpdateOrder: update};
}
