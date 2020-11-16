import CartItemEntity from "../../../domain/entities/cart-item-entity";
import DeliveryStatus from "../../../domain/entities/delivery-status";

export default class OrderValues {
  cart: CartItemEntity[];
  deliveryStatus: DeliveryStatus;
}
