import { useState } from "react";
import { Link } from "react-router-dom";
import "./shipping.scss";

export default function Shipping() {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    state: "",
    city: "",
    pinCode: "",
    mobilenumber: "",
    email: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
    // console.log(shippingInfo);
  };

  return (
    <section className="backgroundColor">
      <div className="container">
        <h1 className="text-center p-5">Shipping Address</h1>
        <form action="">
          <div className="row mb-3 g-3">
            <div className="form-group col-md-6">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
                value={shippingInfo.name}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Address</label>
              <input
                className="form-control"
                type="text"
                name="address"
                placeholder="Address"
                value={shippingInfo.address}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">State</label>
              <input
                className="form-control"
                type="text"
                name="city"
                placeholder="City"
                value={shippingInfo.city}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">City</label>
              <input
                className="form-control"
                type="text"
                name="city"
                placeholder="City"
                value={shippingInfo.city}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Pin Code</label>
              <input
                className="form-control"
                type="number"
                name="pinCode"
                placeholder="Pin Code"
                value={shippingInfo.pinCode}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Mobile Number</label>
              <input
                className="form-control"
                type="number"
                name="mobilenumber"
                placeholder="Mobile Number"
                value={shippingInfo.mobilenumber}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                value={shippingInfo.email}
                onChange={changeHandler}
                required
              />
            </div>
          </div>
          <div className="pb-3 d-flex justify-content-end">
            <div className="mx-2">
              <button type="submit" className="btn btn-success">
                Order Now
              </button>
            </div>
            <button type="submit" className="btn btn-success">
              Go Back
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
