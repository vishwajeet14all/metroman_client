import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/variables.scss";
import "./cart.scss";
import { VscError } from "react-icons/vsc";
import { FaTrash } from "react-icons/fa";

const cartItems = [
  {
    id: 1,
    name: "Cement Product",
    image: "https://i.ibb.co/whwD1Ww/cementbag.png",
    price: 3000,
    quantity: 40,
    stock: 10,
  },
];

const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

export default function Cart() {
  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsValidCouponCode] = useState(false);

  useEffect(() => {
    if (couponCode === "SAVE10") {
      setIsValidCouponCode(true);
    } else {
      setIsValidCouponCode(false);
    }
  }, [couponCode]);

  return (
    <section className="backgroundColor">
      <div className="container">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <div className={`mx-auto orderSummaryWrapper`}>
                <div className={`pt-5 pb-4 border-bottom orderSummary`}>
                  <img
                    src="https://i.ibb.co/16ZtbTH/cart.png"
                    className={`img-fluid cartImage`}
                    alt=""
                  />
                  <div className="ms-3">Order Summary</div>
                </div>
                <div className="d-flex justify-content-center align-items-center py-4 cartDetailsWrapper">
                  {cartItems.map((item) => (
                    <div
                      className="d-flex align-items-center justify-content-around cardDetail"
                      key={item.id}
                    >
                      <img src={item.image} className="w-25" alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <span>Size</span>
                      </div>
                      <div className="d-flex flex-direction-row">
                        <div>
                          <button className="btn btn-secondary">-</button>
                        </div>
                        <span className="ps-2 pe-2 align-content-center">
                          1 Pcs
                        </span>
                        <div>
                          <button className="btn btn-secondary">+</button>
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-danger">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div>
                    <div className="charges pb-2 ps-3">
                      <p>Subtotal: ₹{subtotal}</p>
                      <p>Shipping Charges: ₹{shippingCharges}</p>
                      <p>Tax: ₹{tax}</p>
                      <p>
                        Discount :<em className="text-danger"> ₹{discount}</em>
                      </p>
                      <p className="boldText">Total: ₹{total}</p>
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      {couponCode &&
                        (isValidCouponCode ? (
                          <p className="text-success">
                            ₹{discount} off using the<span>{couponCode}</span>
                          </p>
                        ) : (
                          <p className="text-danger">
                            Invalid Coupon Code <VscError />
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="border-bottom"></div>
                <div className="pt-3 pb-5 d-flex justify-content-end">
                  <div>
                    <span className="boldText"> Total Amount: </span>
                    <span className="boldText"> ₹20000 </span>
                  </div>
                </div>
              </div>
              <div className="pb-5 pt-3 pb-5 d-flex justify-content-end">
                <Link to="/login">
                  <button className="btn btn-primary">Login to Continue</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-center pt-5 mb-4 fw-semibold">
                Cart Empty 😕
              </h1>
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
            </div>
          </>
        )}
      </div>
    </section>
  );
}
