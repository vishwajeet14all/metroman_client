import React from "react";
import DataTable from "../../../components/dataTable/DataTable";

export default function Orders() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      type: "string",
      headerName: "User",
      width: 100,
    },
    {
      field: "amount",
      type: "number",
      headerName: "Amount",
      width: 100,
    },
    {
      field: "discount",
      type: "number",
      headerName: "Discount",
      width: 100,
    },
    {
      field: "quantity",
      type: "number",
      headerName: "Quantity",
      width: 100,
    },
    {
      field: "status",
      type: "string",
      headerName: "Status",
      width: 100,
    },
  ];

  const orders = [
    {
      id: 1,
      name: "Vishwajeet",
      amount: 400,
      discount: 200,
      quantity: 2,
      status: "Processing",
    },
    {
      id: 2,
      name: "Vishwajeet",
      amount: 400,
      discount: 200,
      quantity: 2,
      status: "Processing",
    },
    {
      id: 3,
      name: "Vishwajeet",
      amount: 400,
      discount: 200,
      quantity: 2,
      status: "Processing",
    },
    {
      id: 4,
      name: "Vishwajeet",
      amount: 400,
      discount: 200,
      quantity: 2,
      status: "Processing",
    },
  ];
  return (
    <div>
      <DataTable slug="order" columns={columns} rows={orders} />
    </div>
  );
}
