import {useProductQuery} from "../../../main/lib/generated";
import ProductEntity from "../../domain/entities/product.entity";

interface UseProduct {
  id: ProductEntity["id"];
}

export default function useProduct({id}: UseProduct) {
  const {data} = useProductQuery({variables: {id}});
  const product = data!.product;

  return {data: product};
}
