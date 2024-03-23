import React from "react";
import { Link } from "react-router-dom";
import "../sass/variables.scss";
import style from "./Cart.module.css";

export default function Cart() {
  return (
    <>
      <section className="backgroundColor">
        <div className="container">
          {/* <div className="text-center">
            <h1 className="text-center pt-5 mb-4 fw-semibold">Cart Empty 😕</h1>
            <p className="text-center text-body-tertiary">
              You probably haven't ordered a product yet.
              <br /> To order a product, go to the main page.
            </p>
            <img
              src="https://i.ibb.co/89MkhVq/hero-Cart-Image.png"
              className="img-fluid w-50 m-5"
              alt=""
            />
          </div>
          <div className="text-center">
            <Link to="/products">
              <button className="btn btn-primary m-5">Go Back</button>
            </Link>
          </div> */}
          <div className={`mx-auto ${style.orderSummaryWrapper}`}>
            <div className={`pt-5 pb-4 border-bottom ${style.orderSummary}`}>
              <img
                src="https://i.ibb.co/16ZtbTH/cart.png"
                className={`img-fluid ${style.cartImage}`}
                alt=""
              />
              <div className="ms-3">Order Summary</div>
            </div>
            <div>
              <div className="d-flex align-items-center py-4">
                <img
                  src="https://i.ibb.co/whwD1Ww/cementbag.png"
                  className="w-25"
                  alt=""
                />
                <div className="flex-grow-1">
                  <p>Cement</p>
                  <span>Size</span>
                </div>
                <span className="flex-grow-1">1 Pcs</span>
                <span className="boldText">₹20000</span>
              </div>
              <div className="d-flex align-items-center py-4">
                <img
                  src="https://i.ibb.co/whwD1Ww/cementbag.png"
                  className="w-25"
                  alt=""
                />
                <div className="flex-grow-1">
                  <p>Cement</p>
                  <span>Size</span>
                </div>
                <span className="flex-grow-1">1 Pcs</span>
                <span className="boldText">₹20000</span>
              </div>
            </div>
            <div className="border-bottom"></div>
            <div className="pt-3 pb-5 d-flex justify-content-end">
              <div>
                <span className="boldText"> Total Amount: </span>
                <span className="boldText"> ₹20000 </span>
              </div>
            </div>
            <div>
              <form action="">
                <div className={`row mb-3 g-3`}>
                  <div className="col-md-6">
                    <label className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      value=""
                      onChange=""
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobilenumber"
                      value=""
                      onChange=""
                      required
                    />
                  </div>
                </div>
                <div className={`row mb-3 g-3`}>
                  <div className="form-group col-md-6">
                    <label className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value=""
                      onChange=""
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value=""
                      onChange=""
                      required
                    />
                  </div>
                </div>
                <div className="pb-3 d-flex justify-content-end">
                  <button type="submit" className="btn btn-success">
                    Order Now
                  </button>
                </div>
              </form>
            </div>
            <div className="pb-5 pt-3 pb-5 d-flex justify-content-end">
              <Link to="/login">
                <button className="btn btn-primary">Login to Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
