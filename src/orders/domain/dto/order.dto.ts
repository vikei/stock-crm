import CartItemEntity from "../entities/cart-item-entity";
import DeliveryStatus from "../entities/delivery-status";

export default class OrderDto {
  cart: CartItemEntity[];
  deliveryStatus: DeliveryStatus;
}
