import {useHistory} from "react-router-dom";
import useCreateProductMain from "../../hooks/use-create-product";

export default function useCreateProduct() {
  const history = useHistory();

  const {create} = useCreateProductMain({
    onSuccess: ({id}) => history.push(`/stock/product/${id}`),
  });

  return {create};
}
