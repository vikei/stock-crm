import {useCallback} from "react";
import {Product, ProductInput, useCreateProductMutation} from "../../main/lib/generated";

type UseCreateProductParams = {
  onSuccess?: (data: Product) => void;
};
export default function useCreateProduct({onSuccess}: UseCreateProductParams = {}) {
  const [createMutation] = useCreateProductMutation();

  const create = useCallback(
    async (input: ProductInput) => {
      const {data} = await createMutation({variables: {input}});
      const product = data!.createProduct!;

      onSuccess?.(product);

      return product;
    },
    [createMutation, onSuccess],
  );

  return {create};
}
