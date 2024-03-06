import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import style from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export default function Navbar() {
  const [userData, setUserData] = useState({});
  //logout functionality with o auth
  const logout = () => {
    window.open(`${URL}/api/users/logout`, "_self");
  };

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
                  <Link className={`${style.contactNumber}`} to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>&nbsp;Cart</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${style.contactNumber}`}
                    to="/personaldetail"
                  >
                    <span>UserDetail</span>
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
                    <FontAwesomeIcon icon={faUser} />
                    &nbsp;Login
                  </Link>
                </li>
                <li>
                  <Link className={`${style.contactNumber}`} to="/signup">
                    <FontAwesomeIcon icon={faUser} />
                    &nbsp;Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div>
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
              <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${style.navLinks}`}
                    aria-current="page"
                    to="/"
                  >
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
                  >
                    More
                  </a>
                  <ul className="dropdown-menu">
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
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
}
