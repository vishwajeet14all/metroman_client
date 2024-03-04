import React, { useRef } from "react";
import style from "./Home.module.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Carousel from "../components/Carousel";
import Copywrite from "../components/Copywrite";
import Footer from "../components/Footer";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mln779r",
        "template_uwsrt2u",
        form.current,
        "TOr4Tfz4CxUnFFqsR"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Carousel />
      <Card />
      <section>
        <div className={style.constructionStages}>
          <div className="container text-center">
            <h2>Construction Stages</h2>
            <p>
              Knowing every step of construction is important to make informed
              decisions. Below are all the stages of homebuilding with detailed
              benefits, product usage tips and a lot more. All you have to do is
              pick your desired stage and explore!
            </p>
          </div>
        </div>
      </section>
      <section className={style.constructionStagesPic}>
        <div
          className={`container text-center ${style.constructionPicContainer}`}
        >
          <div className="d-flex justify-content-evenly flex-wrap">
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/sub_structure.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>1</div>
                <span className={style.stageText}>Site Clearing</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapperBg}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/plinth_level.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>2</div>
                <span className={style.stageText}>Foundation</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/super_structure.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>3</div>
                <span className={style.stageText}>Plinth Beam Or Slab</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapperBg}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/masonary_builder.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>4</div>
                <span className={style.stageText}>Brick Masonry Work</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/sub_structure.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>5</div>
                <span className={style.stageText}>Superstructure</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapperBg}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/plaster.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>6</div>
                <span className={style.stageText}>The Lintel</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/water_proof.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>7</div>
                <span className={style.stageText}>Roofing Coating</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapperBg}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/paint_application.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>8</div>
                <span className={style.stageText}>Painting</span>
              </Link>
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="	https://nuvonirmaan.com/wp-content/uploads/2020/04/electrical.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>9</div>
                <span className={style.stageText}>Electrical and Plumbing</span>
              </Link>{" "}
            </div>
            <div className={`${style.numbering}`}>
              {" "}
              <Link className={style.linkStage}>
                {" "}
                <div className={style.stageImageWrapper}>
                  <img
                    className={` ${style.stageImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/wall_putty.png"
                    alt=""
                  />
                </div>
                <div className={style.stageText}>10</div>
                <span className={style.stageText}>
                  Exterior and Interior Finishing
                </span>
              </Link>{" "}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <main>
            <div className="container">
              <div className={style.detailSection}>
                <h1 className={`text-center ${style.title}`}>
                  BUILD YOUR DREAM HOME WITH METRO NIRMAAN
                </h1>
                <p className={`text-center ${style.titletext}`}>
                  With a wide range of brands across cement, concrete and modern
                  building solutions, Metroman has a product designed to meet
                  every requirement. Want to know which product is perfect for
                  your home? Select any pointer below and find out.
                </p>
              </div>
              <div className="p-5">
                <img
                  className="img-fluid mx-auto d-block "
                  src="https://nuvonirmaan.com/wp-content/uploads/2020/05/Application-Guide-Exterior-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </main>
        </div>
      </section>
      <section className={style.innovationSection}>
        <div className={`container`}>
          <div className="text-center">
            <h1 className={style.title}>
              INNOVATION THAT’S BACKED BY RESEARCH AT THE CONSTRUCTION
              DEVELOPMENT AND INNOVATION CENTRE
            </h1>
          </div>
          <div className={` ${style.innovationImage}`}>
            <div className={` ${style.innovationImageWrapper}`}>
              <img
                className="img-fluid"
                src="https://nuvonirmaan.com/wp-content/uploads/2020/04/Innovation_img1.png"
                alt=""
              />
            </div>
            <div className={` ${style.innovationImageWrapper}`}>
              <img
                className="img-fluid"
                src="https://nuvonirmaan.com/wp-content/uploads/2020/05/CDIC_573x488_px.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className={style.innovationText}>
              Construction Development and Innovation Centre (CDIC) enhances our
              capabilities in designing products and adapting services to suit
              your requirement. Recently, it has been bestowed with the
              prestigious NABL Accreditation.
            </p>
          </div>
          <div>
            <h2 className={`text-center ${style.innovationLabel}`}>
              METROMAN’S CDIC RECEIVES NABL ACCREDITATION
            </h2>
          </div>
          <div>
            <div className="text-center col-lg-12 p-5">
              <div className="row">
                <div className="col-lg-6 col-6 border-primary border-end border-2">
                  <img
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/04/Cdic_logo.png"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-6">
                  <img
                    src="	https://nuvonirmaan.com/wp-content/uploads/2020/04/Nabl_logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.sectionSpacingOverall}>
        <div className="container">
          <div className={`${style.sectionAfter} ${style.paddingBottom}`}>
            <h2 className="text-center">WHY CHOOSE METROMAN?</h2>
          </div>
          <div className="">
            <p className={style.chooseDescription}>
              Metroman’s experience, expertise and innovative products have
              always proved helpful for our customers in bringing their dream
              home to life. Metro Nirmaan is a platform that will help you in
              every step of your journey, because we understand you and your
              needs.
            </p>
            <p className={style.extraText}>
              With MetroMan, you can always expect:
            </p>
            <div>
              <div className="row">
                <div className={`col-md-4`}>
                  <div className={style.outerBox}>
                    <div className={style.innerBox}>
                      <div>
                        <img
                          style={{ height: "110px" }}
                          className="img-fluid mx-auto"
                          src="https://nuvonirmaan.com/wp-content/uploads/2020/04/assured.png"
                          alt=""
                        />
                      </div>
                      <div className="text-center">
                        <h3 className={style.innerBoxText}>ASSURED QUALITY</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-4`}>
                  <div className={style.outerBox}>
                    <div className={style.innerBox}>
                      <div>
                        <img
                          style={{ height: "110px" }}
                          className="img-fluid mx-auto"
                          src="https://nuvonirmaan.com/wp-content/uploads/2020/04/ontime_delivery.png"
                          alt=""
                        />
                      </div>
                      <div className="text-center">
                        <h3 className={style.innerBoxText}>ON-TIME DELIVERY</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-4`}>
                  <div className={style.outerBox}>
                    <div className={style.innerBox}>
                      <div>
                        <img
                          style={{ height: "110px" }}
                          className="img-fluid mx-auto"
                          src="	https://nuvonirmaan.com/wp-content/uploads/2020/04/Expert_img.png"
                          alt=""
                        />
                      </div>
                      <div className="text-center">
                        <h3 className={style.innerBoxText}>
                          EXPERT ASSISTANCE
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${style.sectionBackGround} ${style.sectionSpacingOverall}`}
      >
        <div className="container">
          <div>
            <h2 className={`text-center ${style.headingBackground}`}>
              WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US
            </h2>
          </div>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="row">
              <div className="carousel-inner">
                <div className={`col-md-12`}>
                  <div className={`carousel-item active ${style.testiMonial}`}>
                    <div className={style.testimonialImgOuter}>
                      <img
                        src="https://nuvonirmaan.com/wp-content/uploads/2020/04/anil_sharma-120x120.png"
                        className={`d-block img-fluid ${style.imgTestimonials}`}
                        alt="..."
                      />
                      <img
                        src="https://nuvonirmaan.com/wp-content/uploads/2020/04/test_border_img.png"
                        alt="..."
                      />
                      <div className={`text-center`}>
                        <p>
                          Metroman is the first cement which consumes less water
                          during concreting. It also provides additional
                          strength Metroman is the first company to work towards
                          saving water during construction
                        </p>
                        <h4>Mr. Anil Sharma</h4>
                        <p>Jaipur, Rajasthan</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-md-12`}>
                  <div className={`carousel-item ${style.testiMonial}`}>
                    <div className={style.testimonialImgOuter}>
                      <img
                        src="https://nuvonirmaan.com/wp-content/uploads/2020/04/soyab_ali-120x120.png"
                        className={`d-block img-fluid ${style.imgTestimonials}`}
                        alt="..."
                      />
                      <img
                        src="https://nuvonirmaan.com/wp-content/uploads/2020/04/test_border_img.png"
                        alt=""
                      />
                      <div className={`text-center`}>
                        <p>
                          Now I can enjoy the rain from balcony again, thanks to
                          Metroman's Cement
                        </p>
                        <h4>Mr. Soyab Ali</h4>
                        <p>New Delhi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`pb-0 ${style.sectionSpacingOverall}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <div className={`${style.formSection}`}>
                  <img
                    className={`${style.guidanceImage}`}
                    src="https://nuvonirmaan.com/wp-content/uploads/2020/05/guide_image_comp.png"
                    alt=""
                  />
                </div>
                <div className={style.formOuter}>
                  <div className="">
                    <h2
                      className={`text-center ${style.guidanceHeading} ${style.sectionAfter}`}
                    >
                      LOOKING FOE GUIDANCE?
                    </h2>
                    <h5 className={`text-center ${style.guidanceText}`}>
                      For free site visit by a Nuvoco expert, get in touch with
                      us.
                    </h5>
                    <h3 className={`text-center p-2`}>Fill-in your details:</h3>
                  </div>
                  <p className={style.guidanceTextRemark}>
                    *Marked fields are mandatory.
                  </p>
                  <div className="text-center col-lg-12">
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="row justify-content-md-center">
                        <div className="p-3 col-lg-5">
                          <div className="form-floating">
                            <input
                              id={style.inputContact}
                              type="name"
                              name="user_name"
                              className="form-control"
                              placeholder="Name"
                              required
                            />
                            <label for="inputContact">Name:</label>
                          </div>
                        </div>
                        <div className="p-3 col-lg-5">
                          <div className="form-floating">
                            <input
                              id={style.inputContact}
                              type="email"
                              name="user_email"
                              placeholder="Email"
                              required
                              className="form-control"
                            />
                            <label for="inputContact">Email:</label>
                          </div>
                        </div>
                        <div className="p-3 col-lg-5">
                          <div className="form-floating">
                            <input
                              id={style.inputContact}
                              type="mobile"
                              name="user_number"
                              placeholder="Mobile No"
                              className="form-control"
                              required
                            />
                            <label for="inputContact">Mobile No.:</label>
                          </div>
                        </div>
                        <div className="p-3 col-lg-5">
                          <div className="form-floating">
                            <textarea
                              name="message"
                              type="message"
                              className="form-control"
                              placeholder="Message"
                            />
                            <label for="inputContact">Message:</label>
                          </div>
                        </div>
                      </div>
                      <input
                        className={` col-lg-4 ${style.buttonContactUs}`}
                        type="submit"
                        value="Send"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      <Copywrite />
      <div className={style.watsapp}>
        <Link to="https://wa.me/918218327600">
          <img width="50px" src="https://i.ibb.co/HHMP1j0/watsapp.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
}
