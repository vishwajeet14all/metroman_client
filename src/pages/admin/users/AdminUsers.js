import React, { useState } from "react";
import DataTable from "../../../components/dataTable/DataTable";
import { userRows } from "../../../data";
import "./users.scss";
import Add from "../../../components/add/Add";

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
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "createdAt",
    type: "string",
    headerName: "Created At",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 200,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  // {
  //   field: "action",
  //   headerName: "Actions",
  //   width: 100,
  //   renderCell: (params) => {
  //     return (
  //       <div className="action">
  //         <div className="view">View</div>
  //         <div className="delete">Delete</div>
  //       </div>
  //     );
  //   },
  // },
];

export default function Users() {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="/layout/users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
}
