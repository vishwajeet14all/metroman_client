import "./singleproduct.scss";
import Single from "../../../components/single/Single";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

export default function Productdetails() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <div className="singleProduct">
      <Single slug="product" id={id} />
    </div>
  );
}
