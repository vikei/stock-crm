import {useCallback} from "react";
import useMessages from "../../../../../library/lib/use-messages";
import {useDeleteProductMutation} from "../../../../../main/lib/generated";
import ProductEntity from "../../../../domain/entities/product.entity";
import useRefetchProducts from "./use-refetch-products";

export default function useDeleteProduct() {
  const {refetch} = useRefetchProducts();
  const [deleteMutation] = useDeleteProductMutation();
  const message = useMessages();

  return useCallback(
    async (id: ProductEntity["id"]) => {
      try {
        await deleteMutation({variables: {id}});
        message.success("Продукт успешно удален!");
        await refetch();
      } catch (e) {
        console.error(e);
      }
    },
    [deleteMutation, message, refetch],
  );
}
