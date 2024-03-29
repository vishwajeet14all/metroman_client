import React from "react";
import "./addUser.scss";

export default function Add(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //axios.post(`/api/${slug}s`,{data})
  };

  return (
    <div className="add">
      <div className="addModal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label htmlFor="">{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
