import React from "react";
import style from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <>
      <section className={`container ${style.aboutUs}`}>
        <div className="row d-flex ">
          <div className="col">
            <h3>
              "Metroman Casting Yards: Transforming Construction through
              Innovation and Excellence"
            </h3>
            <p>
              Metroman Casting Yards is a pioneering force in the construction
              industry, dedicated to revolutionizing the acquisition of concrete
              and construction products through modern and technical solutions.
              As an ISO-certified company, we prioritize the pillars of quality,
              quantity, and cost to provide our customers with unparalleled
              assurance.Our product portfolio, exemplified by Dry Mix Mortar and
              Dry Mix Concrete Bags, stands as a testament to our commitment to
              delivering excellence to the public. Departing from conventional
              practices, we address longstanding issues related to the purchase
              of building materials by meticulously sourcing raw materials from
              significant Metro projects, ensuring not only quality but also
              certified weights that guarantee quantity.A hallmark of our
              approach is the adoption of a "cut out the middleman" principle,
              leading to comparably lower rates for our products. By eliminating
              intermediaries, we shield our customers from increased costs or
              commissions, embodying transparency in pricing – a stark departure
              from the traditional system where customers are often
              misguided.The benefits of choosing Metroman Casting Yards are
              manifold. In addition to the evident advantages of Enhanced
              Strength and Durability, we stand by our commitment to quality
              through rigorous batch testing of our produced materials.
              Transparent pricing, coupled with quantity assurance, sets us
              apart from the prevalent practices in the industry, ensuring a
              customer experience devoid of misinformation.Behind our success is
              a team of mentors and technical experts with diverse backgrounds,
              hailing from esteemed government and private construction
              companies.Our collective expertise fuels our
              mission to redefine standards in the construction industry, making
              us the trusted choice for those seeking reliability, quality, and
              innovation.
            </p>
          </div>
          <div className="col">
            <img
              className="img-fluid"
              src="	https://smminfra.in/wp-content/uploads/2021/09/about-us-2-1-2048x1365.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
