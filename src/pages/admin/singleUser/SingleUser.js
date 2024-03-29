import React from "react";
import "./singleuser.scss";
import Single from "../../../components/single/Single";
import { singleUser } from "../../../data";

export default function SingleUser() {
  return (
    <div className="singleUser">
      <Single {...singleUser}/>
    </div>
  );
}
