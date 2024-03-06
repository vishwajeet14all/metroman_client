import React from "react";
import style from "./Contactus.module.css";

export default function Contactus() {
  return (
    <>
      <div className={style.outerImageDiv}>
        <img
          className={`img-fluid ${style.image}`}
          src="https://i.ibb.co/qyQh27G/Whats-App-Image.jpg"
          alt=""
        />
      </div>
      <div className={style.background}>
        <div className="container">
          <h1 className={style.heading}>Contact Us</h1>
          <h3 className={style.headingOuter}>Customer Support</h3>
          <div className={style.content}>
            <p className={style.innerContent}>
              <p>Email: metromancastingyards@gmail.com</p>
              <p>Phone: +91 8218327600</p>
            </p>
          </div>
          <h3 className={style.headingOuter}>Address</h3>
          <div className={style.content}>
            <p className={style.innerContent}>
              Office 1137 GH14 paschim vihar New Delhi 110087
            </p>
          </div>
          <h3 className={style.headingOuter}>Feedback </h3>
          <div className={style.content}>
            <form className={style.innerContent}>
              <label className={style.feedback}>Your Feedback</label>
              <br />
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                cols="50"
              ></textarea>
              <br />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
            <p className={style.innerContent}>
              <p>
                Please feel free to contact us using any of the methods listed
                above. We aim to respond to all inquiries within 12-24 hours
              </p>
              <p>Thank you for choosing MetroManCastingYards </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
