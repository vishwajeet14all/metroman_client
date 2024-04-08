import React, { useEffect, useState } from "react";
import DataTable from "../../../components/dataTable/DataTable";
import "./users.scss";
import Add from "../../../components/add/Add";
import { deleteUser, getAllUsers } from "../../../services/api";
import { columns } from "../../../data";


export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  
  //getting user data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();
        console.log(
          "response in AdminUser.js Getting all user data",
          response.data
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching Users", error);
      }
    };
    fetchData();
  }, []);

  //getting user data from backend
  const fetchData = async () => {
    try {
      const response = await getAllUsers();
      console.log(
        "response in AdminUser.js Getting all user data",
        response.data
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching Users", error);
    }
  };

  //calling delete user data from backend
  const deleteUserData = async (id) => {
    try {
      const response = await deleteUser(id);
      console.log("Delete user in DataTable.js ", response.data);
      setUsers(response.data);
    } catch (error) {
      console.log("Error While deleting User in client ", error);
    }
  };

  //handle delete function
  const handleDelete = async (id) => {
    try {
      await deleteUserData(id);
      console.log(`${id} " has been deleted" `);
      await fetchData();
    } catch (error) {
      console.log("Error while deleting user: ", error);
    }
  };

  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable
        slug=""
        columns={columns}
        handleDelete={handleDelete}
        rows={users}
      />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
}
