import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card() {
  const card = [
    {
      id: 1,
      image: "https://i.ibb.co/Dp2rMtQ/home-building.png",
      title: "CONSTRUCTION STAGES",
      description: "Essential steps of home-building you need to know",
      link: "/stages",
      button: "VIEW STAGES",
    },
    {
      id: 2,
      image: "https://i.ibb.co/BLnjB8d/calculator.png",
      title: "CALCULATORS",
      description: "How ‘NOT’ to exceed the budget while building your home",
      link: "/calculator",
      button: "VIEW MORE",
    },
    {
      id: 3,
      image: "https://i.ibb.co/gZVZ55H/house-plan.png",
      title: "HOUSE PLANS",
      description: "Floor plans to inspire you while building your own abode",
      link: "/stages",
      button: "EXPLORE",
    },
  ];

  return (    
    <section className={style.sectionWrapper}>
      <div className={`container ${style.container}`}>
        {card.map((item) => (
          <div
            key={item.id}
            className={`card ${style.cardSingle}`}
            style={{ width: "18rem" }}
          >
            <img
              src={item.image}
              className={`card-img-top mx-auto ${style.cardImg}`}
              alt="..."
            />
            <div className={`card-body text-center`}>
              <h4 className={`card-title ${style.box}`}>{item.title}</h4>
              <p className="card-text pt-4">{item.description}</p>
              <Link
                to={item.link}
                className={`btn btn-secondary ${style.cardButton}`}
              >
                {item.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={style.button}>
        <Link className={`btn btn-primary ${style.buttonGrp}`}>
          Landmark Project
        </Link>
        <Link className={`btn btn-primary ${style.buttonGrp}`}>
          Metroman at a glance
        </Link>
      </div>
    </section>
  );
}
