import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Paymentsuccess() {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  return (
    <div>
      <div>Reference No.{referenceNum}</div>
    </div>
  );
}
