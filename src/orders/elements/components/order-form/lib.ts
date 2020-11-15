import {Order, DeliveryStatus, OrderInput} from "../../../../main/lib/generated";

export function getDefaultOrderValues(data: Order | undefined) {
  return data
    ? {
        ...data,
        inventory: data.cart.map(cartItem => ({
          productId: cartItem.productId,
          count: cartItem.count,
        })),
      }
    : {status: DeliveryStatus.Processing};
}

export function deserializeOrderForm(data: OrderInput) {
  return {
    ...data,
    cart: data.cart.map(cartItem => ({productId: cartItem.productId, count: cartItem.count})),
  };
}
