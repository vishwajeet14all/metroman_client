import { useState } from "react";
import { Link } from "react-router-dom";
import "./order.scss";
const orderItems = [
  {
    name: "Puma Shoes",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    _id: "12345ad",
    quantity: 4,
    price: 2000,
  },
];

export default function Order() {
  const [order, setOrder] = useState({
    name: "Vishwajeet yadav",
    address: "77 black street",
    city: "delhi",
    state: "delhi",
    country: "india",
    pinCode: "231001",
    status: "Processing",
    subtotal: 4000,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 12000,
    orderItems,
    _id: "abcd",
  });
  const {
    name,
    address,
    city,
    state,
    country,
    pinCode,
    status,
    discount,
    subtotal,
    shippingCharges,
    tax,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div>
      <main className="productManagement">
        <section>
          <h4>Order Items</h4>
          {order.orderItems.map((i) => (
            <Productcard
              name={i.name}
              image={i.image}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </section>
        <article className="shippingInfoCard">
          <h3>Order Info</h3>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>
          <h5>Status Info</h5>
          <p>
            Status:
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : " red"
              }
            >
              {" "}
              {status}
            </span>
          </p>
          <button className="shippingBtn" onClick={updateHandler}>
            {" "}
            Process Status
          </button>
        </article>
      </main>
    </div>
  );
}

const Productcard = ({ name, image, price, quantity, _id }) => (
  <div className="container productCard">
    <img src={image} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ₹{price} X {quantity} = ₹{price * quantity}
    </span>
  </div>
);
