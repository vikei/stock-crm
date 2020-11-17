import React from "react";
import {Link} from "react-router-dom";

interface SaveProductMessageProps {
  id: string;
}

export default function SaveProductMessage({id}: SaveProductMessageProps) {
  return (
    <span>
      Продукт успешно сохранен <Link to={`/stock/product/${id}`}>Просмотреть</Link>
    </span>
  );
}