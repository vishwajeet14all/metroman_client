import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { logout } from "../../services/api";
import "./navbar.scss";

const URL = process.env.REACT_APP_API_URL;

export default function Navbar() {
  const [userData, setUserData] = useState({});
  // console.log("userData", userData);

  //*----------------
  //getting user data
  //*----------------
  const getUserSuccess = async () => {
    try {
      const user = await axios.get(`${URL}/api/users/login/success`, {
        withCredentials: true,
      });
      console.log("Response from o auth ", user);
      setUserData(user.data.user);
    } catch (error) {
      console.log("Error while calling getUserSuccess Api ", error);
    }
  };

  useEffect(() => {
    getUserSuccess();
  }, []);

  return (
    <>
      <div className={`navbar ${style.logowrapper}`}>
        <div>
          <Link to="/">
            <img
              className={style.logo}
              src="https://i.ibb.co/WBsygQj/NEW-LOGO.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <ul className={style.navList}>
            <li>
              <Link
                className={style.contactNumber}
                to="https://wa.me/918218327600"
              >
                <img
                  src="https://i.ibb.co/wLfMm4J/whatsapp.png"
                  alt=""
                  className={`img-fluid  ${style.watsAppImg}`}
                />
                <span> +91 8218327600</span>
              </Link>
            </li>
            <li>
              <Link className={style.email} to="">
                <FontAwesomeIcon
                  className={style.emailIcon}
                  icon={faEnvelope}
                />
                <span> metromancastingyards@gmail.com</span>
              </Link>
            </li>

            {Object?.keys(userData)?.length > 0 ? (
              <>
                <li>
                  <Link
                    className={`${style.contactNumber}`}
                    to="/personaldetail"
                  >
                    <span>UserDetails</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${style.contactNumber}`}
                    to=""
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className={`${style.contactNumber}`} to="/login">
                    <i className="bi bi-person-lines-fill"></i>
                    &nbsp;Login
                  </Link>
                </li>
                <li>
                  <Link className={`${style.contactNumber}`} to="/signup">
                    <i className="bi bi-person-fill-add"></i>
                    &nbsp;Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav ${style.navbarWrapper}`}>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/aboutus">
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/stages">
                    Construction Stages
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${style.navLinks}`}
                    to="/calculator"
                  >
                    Calculator
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/products">
                    Products
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${style.navLinks}`}
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="navbarDropdown"
                  >
                    More
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className={`dropdown-item`} to="/privacyPolicy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className={`dropdown-item`} to="/termsandcondition">
                        Terms and condition
                      </Link>
                    </li>
                    <li>
                      <Link className={`dropdown-item`} to="/contactus">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item`}
                        to="/Cancellationandrefund"
                      >
                        Cancellation and refund
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item`}
                        to="/Shippinganddelivery"
                      >
                        Shipping and delivery
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`}>
                    <i class="bi bi-search"></i>
                    <span>&nbsp;Search</span>
                  </Link>
                </li>
                <li className="nav-item user">
                  <Link className={`nav-link ${style.navLinks}`}>
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <span>&nbsp;Vishwajeet</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`}>
                    <i className="bi bi-bell"></i>                    
                    <span class="position-absolute top-10 start-25 translate-middle p-1 bg-danger border badge border-light rounded-circle">5
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </Link>
                </li>
                <span>&nbsp;&nbsp;</span>
                <li className={`nav-item ${style.cartWrapper}`}>
                  <Link className={`nav-link ${style.navLinks}`} to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>&nbsp;Cart</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
