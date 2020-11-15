import {useCallback} from "react";
import {useCreateProductMutation} from "../../../main/lib/generated";
import ProductDto from "../../domain/dto/product.dto";
import ProductEntity from "../../domain/entities/product.entity";

type UseCreateProductParams = {
  onSuccess?: (data: ProductEntity) => void;
};

export default function useCreateProduct({onSuccess}: UseCreateProductParams = {}) {
  const [createMutation] = useCreateProductMutation();

  const create = useCallback(
    async (input: ProductDto) => {
      const {data} = await createMutation({variables: {input}});
      const product = data!.createProduct!;

      onSuccess?.(product);

      return product;
    },
    [createMutation, onSuccess],
  );

  return {create};
}
