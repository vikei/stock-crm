import useDrawer, {closeDrawer} from "../../../../library/lib/use-drawer";
import useProductMessage from "../../hooks/use-product-message";
import useUpdateProductMain from "../../hooks/use-update-product";

export default function useUpdateProduct() {
  const {dispatch} = useDrawer();
  const message = useProductMessage();

  const {update} = useUpdateProductMain({
    onSuccess: ({id}) => {
      closeDrawer(dispatch);
      message(id);
    },
  });

  return {update};
}
