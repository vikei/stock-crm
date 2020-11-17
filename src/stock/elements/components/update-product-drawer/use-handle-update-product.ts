import useDrawer, {closeDrawer} from "../../../../library/lib/use-drawer";
import useProductMessage from "../../hooks/use-product-message";
import useUpdateProduct from "../../hooks/use-update-product";

export default function useHandleUpdateProduct() {
  const {dispatch} = useDrawer();
  const message = useProductMessage();

  const {update} = useUpdateProduct({
    onSuccess: ({id}) => {
      closeDrawer(dispatch);
      message(id);
    },
  });

  return {handleUpdateProduct: update};
}
