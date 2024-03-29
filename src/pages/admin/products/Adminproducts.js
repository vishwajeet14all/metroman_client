import React, { useState } from "react";
import Add from "../../../components/add/Add";
import { products } from "../../../data";
import DataTable from "../../../components/dataTable/DataTable";
import "./products.scss"

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img || "https://i.ibb.co/1KwfzCK/Noavatar.jpg"}
          alt=""
        />
      );
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 150,
  },
  {
    field: "inStock",
    headerName: "InStock",
    width: 100,
    type: "boolean",
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 150,
  },
];

export default function Adminproducts() {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="/layout/products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
}
