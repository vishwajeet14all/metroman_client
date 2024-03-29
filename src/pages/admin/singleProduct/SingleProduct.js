import React from "react";
import "./singleproduct.scss";
import Single from "../../../components/single/Single";
import { singleProduct } from "../../../data";

export default function SingleProduct() {
  return (
    <div className="singleProduct">    
      <Single {...singleProduct}/>
    </div>
  );
}
