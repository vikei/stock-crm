import CartItemEntity from "./cart-item-entity";
import DeliveryStatus from "./delivery-status";

export default class OrderEntity {
  id: string;
  deliveryStatus: DeliveryStatus;
  cart: CartItemEntity[];
}
