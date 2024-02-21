import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <section className={style.sectionWrapper}>
      <div className={`container ${style.container}`}>
        <div className={`card ${style.cardSingle}`} style={{ width: "18rem" }}>
          <img
            src="https://nuvonirmaan.com/wp-content/uploads/2020/04/home_building.png"
            className={`card-img-top mx-auto ${style.cardImg}`}
            alt="..."
          />
          <div className={`card-body text-center ${style}`}>
            <h5 className="card-title">CONSTRUCTION STAGES</h5>
            <p className="card-text">
              Essential steps of home-building you need to know
            </p>     
            <Link to="/stages" className={`btn btn-secondary ${style.cardButton}`}>
              VIEW STAGES
            </Link>
          </div>
        </div>
        <div className={`card ${style.cardSingle}`} style={{ width: "18rem" }}>
          <img
            src="https://nuvonirmaan.com/wp-content/uploads/2020/04/calculator.png"
            className={`card-img-top mx-auto ${style.cardImg}`}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">CALCULATORS</h5>
            <p className="card-text">
              How ‘NOT’ to exceed the budget while building your home
            </p>
            <Link to="/calculator" className={`btn btn-secondary ${style.cardButton}`}>
              VIEW MORE
            </Link>
          </div>
        </div>
        <div className={`card ${style.cardSingle}`} style={{ width: "18rem" }}>
          <img
            src="	https://nuvonirmaan.com/wp-content/uploads/2020/04/house_plan.png"
            className={`card-img-top mx-auto ${style.cardImg}`}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">HOUSE PLANS</h5>
            <p className="card-text">
              Floor plans to inspire you while building your own abode
            </p>
            <Link href="#" className={`btn btn-secondary ${style.cardButton}`}>
              EXPLORE
            </Link>
          </div>
        </div>
      </div>
      <div className={style.button}>
        <Link className={`btn btn-primary ${style.buttonGrp}`}>Landmark Project</Link>
        <Link className={`btn btn-primary ${style.buttonGrp}`}>Metroman at a glance</Link>
      </div>
    </section>
  );
}
