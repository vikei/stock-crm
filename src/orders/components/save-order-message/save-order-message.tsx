import React from "react";
import {Link} from "react-router-dom";

interface SaveOrderMessageProps {
  id: string;
}

export default function SaveOrderMessage({id}: SaveOrderMessageProps) {
  return (
    <span>
      Заказ успешно сохранен <Link to={`/orders/${id}`}>Просмотреть</Link>
    </span>
  );
}
