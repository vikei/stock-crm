import React from "react";
import {Link} from "react-router-dom";
import ProductEntity from "../../../domain/entities/product.entity";

interface SaveProductMessageProps {
  id: ProductEntity["id"];
}

export default function SaveProductMessage({id}: SaveProductMessageProps) {
  return (
    <span>
      Продукт успешно сохранен <Link to={`/stock/product/${id}`}>Просмотреть</Link>
    </span>
  );
}
