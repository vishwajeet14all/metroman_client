import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card() {





  
  return (
    <section className={style.sectionWrapper}>
      <div className={`container ${style.container}`}>
        <div className={`card ${style.cardSingle}`} style={{ width: "18rem" }}>
          <img
            src="https://i.ibb.co/Dp2rMtQ/home-building.png"
            className={`card-img-top mx-auto ${style.cardImg}`}
            alt="..."
          />
          <div className={`card-body text-center`}>
            <h4 className={`card-title ${style.box}`}>CONSTRUCTION STAGES</h4>
            <p className="card-text pt-4">
              Essential steps of home-building you need to know
            </p>     
            <Link to="/stages" className={`btn btn-secondary ${style.cardButton}`}>
              VIEW STAGES
            </Link>
          </div>
        </div>
        <div className={`card ${style.cardSingle}`} style={{ width: "18rem" }}>
          <img
            src="https://i.ibb.co/BLnjB8d/calculator.png"
            className={`card-img-top mx-auto ${style.cardImg}`}
            alt="..."
          />
          <div className="card-body text-center">
            <h4 className={`card-title ${style.box}`}>CALCULATORS</h4>
            <p className="card-text pt-4">
              How ‘NOT’ to exceed the budget while building your home
            </p>
            <Link to="/calculator" className={`btn btn-secondary ${style.cardButton}`}>
              VIEW MORE
            </Link>
          </div>
        </div>
        <div className={`card ${style.cardSingle}`} style={{ width: "18rem" }}>
          <img
            src="	https://i.ibb.co/gZVZ55H/house-plan.png"
            className={`card-img-top mx-auto ${style.cardImg}`}
            alt="..."
          />
          <div className="card-body text-center">
            <h4 className={`card-title ${style.box}`}>HOUSE PLANS</h4>
            <p className="card-text pt-4">
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

