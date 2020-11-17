import React from "react";
import {Link} from "react-router-dom";
import OrderEntity from "../../../domain/entities/orderEntity";

interface SaveOrderMessageProps {
  id: OrderEntity["id"];
}

export default function SaveOrderMessage({id}: SaveOrderMessageProps) {
  return (
    <span>
      Заказ успешно сохранен <Link to={`/orders/${id}`}>Просмотреть</Link>
    </span>
  );
}
