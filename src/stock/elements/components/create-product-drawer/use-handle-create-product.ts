import useDrawer, {closeDrawer} from "../../../../library/lib/use-drawer";
import ProductEntity from "../../../domain/entities/product.entity";
import useCreateProductMain from "../../hooks/use-create-product";
import useProductMessage from "../../hooks/use-product-message";

type UserHandleCreateProduct = {
  onSuccess?: (product: ProductEntity) => void;
};

export default function useHandleCreateProduct({onSuccess}: UserHandleCreateProduct) {
  const {dispatch} = useDrawer();
  const message = useProductMessage();

  const {create} = useCreateProductMain({
    onSuccess: product => {
      closeDrawer(dispatch);
      message(product.id);
      onSuccess?.(product);
    },
  });

  return {handleCreateProduct: create};
}
