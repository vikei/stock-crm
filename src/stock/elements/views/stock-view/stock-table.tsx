import {Table} from "antd";
import React from "react";
import ProductEntity from "../../../domain/entities/product.entity";
import productColumns from "./lib/products-columns";

interface StockTableProps {
  data: Required<ProductEntity[]>;
}

export default function StockTable({data}: StockTableProps) {
  return <Table columns={productColumns} dataSource={data} rowKey="id" />;
}
