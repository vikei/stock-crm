import CartItem from "./cart-item";
import DeliveryStatus from "./delivery-status";

export default class Order {
  id: number;
  deliveryStatus: DeliveryStatus;
  cart: CartItem[];
}
