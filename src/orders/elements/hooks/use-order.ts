import {useOrderQuery} from "../../../main/lib/generated";
import OrderEntity from "../../domain/entities/orderEntity";

interface UseOrder {
  id: OrderEntity["id"];
}

export default function useOrder({id}: UseOrder) {
  const {data} = useOrderQuery({variables: {id}});
  const order = data!.order;

  return {data: order};
}
