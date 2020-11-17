import {useCallback} from "react";
import {useUpdateProductMutation} from "../../../main/lib/generated";
import ProductDto from "../../domain/dto/product.dto";
import ProductEntity from "../../domain/entities/product.entity";

type UseUpdateProductProps = {
  onSuccess?: (data: ProductEntity) => void;
};

export default function useUpdateProduct({onSuccess}: UseUpdateProductProps = {}) {
  const [updateMutation] = useUpdateProductMutation();

  const update = useCallback(
    async (id: ProductEntity["id"], input: ProductDto) => {
      const {data} = await updateMutation({variables: {input, id}});
      const product = data!.updateProduct!;
      onSuccess?.(product);
      return product;
    },
    [onSuccess, updateMutation],
  );

  return {update};
}
