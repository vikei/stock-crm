import useDrawer, {closeDrawer} from "../../../../library/lib/use-drawer";
import useCreateProductMain from "../../hooks/use-create-product";
import useProductMessage from "../../hooks/use-product-message";

type UserCreateProduct = {
  onSuccess?: () => void;
};

export default function useCreateProduct({onSuccess}: UserCreateProduct) {
  const {dispatch} = useDrawer();
  const message = useProductMessage();

  const {create} = useCreateProductMain({
    onSuccess: ({id}) => {
      closeDrawer(dispatch);
      message(id);
      onSuccess?.();
    },
  });

  return {create};
}
