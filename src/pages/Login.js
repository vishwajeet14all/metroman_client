import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/api";
import { useNavigate } from 'react-router-dom';

const URL = process.env.REACT_APP_API_URL;

export default function Login() {

  const navigate = useNavigate();

  const [ formData, setFormData ] = useState({
    email: "",
    password: "",
  })
  function loginWithGoogle() {   
    window.open(`${URL}/auth/google/callback`, "_self");
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setFormData((prevData) => ({
      ...prevData,
      [name]:value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      navigate("/personaldetail");
    } catch (error) {
      console.error("Login failed:", error);      
    }
  };
 
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <form className="shadow rounded-3 box-area p-3 col-md-5"  onSubmit={handleSubmit}>
        <div className="header-text mb-4">
          <h4>Hello, Again</h4>
          <p>We are happy to have you back</p>
        </div>
        <div className="mb-3">      
          <input
            placeholder="Email address"
            type="email"
            name="email"
            className="form-control form-control-lg bg-light fs-6"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={formData.email}
          />   
        </div>
        <div className="mb-3">        
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="form-control form-control-lg bg-light fs-6"
            id="exampleInputPassword1"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="mb-3 form-check">
            <input
              placeholder="Password"
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <div className="forgot">
            <small>
              <Link to="#">Forgot Password?</Link>
            </small>
          </div>
        </div>
        <div className="mb-3">
            <button type="submit" className="w-100 btn btn-primary">
              Login
            </button>        
        </div>
        <div className="">
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
            Don't have account? <Link to="/signup">Sign Up</Link>{" "}
          </small>
        </div>
      </form>
    </div>
  );
}
