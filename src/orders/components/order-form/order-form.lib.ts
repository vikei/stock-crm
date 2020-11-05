import {Order, OrderStatus} from "../../../main/lib/generated";

export function getDefaultOrderValues(data: Order | undefined) {
  return data
    ? {
        ...data,
        inventory: data.inventory.map(inventoryItem => ({
          productId: inventoryItem.productId,
          count: inventoryItem.count,
        })),
      }
    : {status: OrderStatus.Processing};
}
