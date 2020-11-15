import {useHistory} from "react-router-dom";
import useUpdateProductMain from "../../hooks/use-update-product";

export default function useUpdateProduct() {
  const history = useHistory();

  const {update} = useUpdateProductMain({
    onSuccess: ({id}) => history.push(`/stock/product/${id}`),
  });

  return {update};
}
