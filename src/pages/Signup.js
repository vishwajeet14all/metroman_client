import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../services/api";
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mobilenumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectedOption: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log({ name, value, type, checked });
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const loginWithGoogle = () => {
    window.open(`${URL}/auth/google/callback`, "_self");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.password === formData.confirmPassword &&
      formData.acceptTerms
    ) {
      const signUpSuccess = await signUp(formData);
      // console.log("signUpSuccess ",signUpSuccess);
      if (signUpSuccess) {
        alert("Sign up Successful");
        navigate("/login");
      } else {
        alert("Sign up failed. Please try again.");
      }
    } else {
      alert("Passwords do not match or terms are not accepted");
    }
  };
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <form
        className="shadow rounded-3 box-area p-3 col-md-5"
        onSubmit={handleSubmit}
      >
        <div className="header-text mb-4 text-center">
          <h2>Sign up</h2>
          <p>Create your account</p>
        </div>
        <div className="mb-3">
          <input
            placeholder="Mobile Number"
            type="number"
            name="mobilenumber"
            className="form-control form-control-lg bg-light fs-6"
            value={formData.mobilenumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Email address"
            type="email"
            name="email"
            className="form-control form-control-lg bg-light fs-6"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="form-control form-control-lg bg-light fs-6"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Confirm Password"
            type="confirmPassword"
            name="confirmPassword"
            className="form-control form-control-lg bg-light fs-6"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <select
            //  type="select" //we can remove it not important
            name="selectedOption"
            className="form-control form-select form-control-lg bg-light fs-6"
            id="exampleInputPassword1"
            value={formData.selectedOption}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Dealer">Dealer</option>
            <option value="Seller">Seller</option>
            <option value="Customer">Customer</option>
          </select>
        </div>

        <div className="d-flex justify-content-between">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              name="acceptTerms"
              className="form-check-input"
              id="exampleCheck1"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I read and agree to <Link to="#">Term and Condition</Link>
            </label>
          </div>
        </div>

        <div className="mb-3">
          <button type="submit" className="w-100 btn btn-primary">
            Sign up
          </button>
        </div>
        <div>
          <Link>
            <button
              onClick={loginWithGoogle}
              type="submit"
              className="w-100 btn btn-light"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                style={{ width: "25px" }}
                alt=""
                className="me-2"
              />
              <small>Sign In with Google</small>
            </button>
          </Link>
        </div>
        <div>
          <small>
            Already't have account? <Link to="/login">Login</Link>{" "}
          </small>
        </div>
      </form>
    </div>
  );
}
