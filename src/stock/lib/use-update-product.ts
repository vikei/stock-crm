import {useCallback} from "react";
import {Product, ProductInput, useUpdateProductMutation} from "../../main/lib/generated";

type UseUpdateProductProps = {
  onSuccess?: (data: Product) => void;
};

export default function useUpdateProduct({onSuccess}: UseUpdateProductProps = {}) {
  const [updateMutation] = useUpdateProductMutation();

  const update = useCallback(
    async (id: Product["id"], input: ProductInput) => {
      const {data} = await updateMutation({variables: {input, id}});
      const product = data!.updateProduct!;

      onSuccess?.(product);

      return product;
    },
    [onSuccess, updateMutation],
  );

  return {update};
}
