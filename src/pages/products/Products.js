import style from "./Products.module.css";
import { fetchPaymentKey, createOrder } from "../../services/api";
import { useLatestProductsQuery } from "../../redux/api/productApi";
import Loader from "../../components/loader/Loader";

export default function Products() {
  const { data, isLoading } = useLatestProductsQuery("");

  async function checkOutHandler(price) {
    try {
      const key = await fetchPaymentKey();
      const order = await createOrder(price);
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Metroman",
        description: "Test Transaction",
        image: "http://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:8000/api/payment/paymentverification",
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#0d6efd",
        },
      };
      // console.log("Options ",options);
      //open the razorpay window
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log("Error while calling payment api ", error);
    }
  }

  return (
    <>
      <section className={`${style.productVideoBackground}`}>
        <div className="container">
          <h1 className={`${style.sectionTitle} text-center`}>
            ...Cement Name
          </h1>
          <div className="d-flex justify-content-center pt-5">
            <iframe
              className={`${style.player}`}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-K-5mPse5-c?si=I8LwIqPjI6knlq-v"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className={`${style.productBackGround}`}>
        <div className="container">
          <div className="row pt-5 justify-content-evenly pb-5">
            {isLoading ? (
              <Loader />
            ) : (
              data?.map((prod) => (
                <div className="col-lg-12" key={prod._id}>
                  <div className={`card ${style.cardBackground}`}>
                    <div className="row g-0 mb-4 d-flex justify-content-center">
                      <div className="col-4 col-md-2 p-2">
                        <img
                          src={prod.image}
                          className={`${style.cardImage} img-fluid`}
                          alt=""
                        />
                      </div>
                      <div className="col-12 col-md-10 pt-2 pb-2 ps-4 pe-4">
                        <h3>{prod.name}</h3>
                        <p>{prod.description}</p>
                        <p>&#8377; {prod.price}</p>
                        <div>
                          <button className="btn btn-primary">
                            Add to Cart
                          </button>
                          <button
                            onClick={() => checkOutHandler(prod.price)}
                            className="btn btn-success mx-4"
                          >
                            Purchase
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
