import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/NEW_LOGO.png";
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
      <div className="container">
        <div className="row">
          <div className={style.logowrapper}>
            <div>
              <Link to="/">
                <img className={style.logo} src={logo} alt="" />
              </Link>
            </div>
            <div className={style.smallScreen}>
              <ul className={style.navList}>
                <li>
                  <Link
                    className={style.contactNumber}
                    to="https://wa.me/918218327600"
                  >
                    <img
                      src="	https://nuvonirmaan.com/wp-content/themes/nuvoco/assets/images/whatsapp.png"
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
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">
              MetroMan
            </Link> */}
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
                  <Link className={`nav-link ${style.navLinks}`} to="/stages">
                    Construction Stages
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link ${style.navLinks}`} to="/aboutus">
                    About Us
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

                {Object?.keys(userData)?.length > 0 ? (
                  <>
                    <li className="nav-item">
                      <Link className={`nav-link ${style.navLinks}`} to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>&nbsp;Cart</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${style.navLinks}`}
                        to="/personaldetail"
                      >
                        <span>UserDetail</span>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className={`nav-link ${style.navLinks}`}
                        to=""
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    {" "}
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${style.navLinks}`}
                        to="/login"
                      >
                        <FontAwesomeIcon icon={faUser} />
                        &nbsp;Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${style.navLinks}`}
                        to="/signup"
                      >
                        <FontAwesomeIcon icon={faUser} />
                        &nbsp;Signup
                      </Link>
                    </li>
                  </>
                )}
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
                      <Link className={`dropdown-item`} to="/PrivacyPolicy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className={`dropdown-item`} to="/PrivacyPolicy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className={`dropdown-item`} to="/PrivacyPolicy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className={`dropdown-item`} to="/PrivacyPolicy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className={`dropdown-item`} to="/PrivacyPolicy">
                        Privacy Policy
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
