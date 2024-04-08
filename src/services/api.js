import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

//*-----
//signUp
//*-----
export const signUp = async (data) => {
  try {
    await axios.post(`${URL}/api/users/signup`, data);
    return true;
  } catch (error) {
    console.log("Error while calling signup Api ", error);
  }
};
//*-----
//login
//*-----
export const login = async (data) => {
  try {
    return await axios.post(`${URL}/api/users/login`, data);
  } catch (error) {
    console.log("Error while calling signup Api ", error);
    alert("Login Failed");
  }
};
//*------------------------------------
//Saving personal detail data with form
//*------------------------------------

export const savePersonalDetail = async (data, token) => {
  try {
    const response = await axios.post(`${URL}/api/users/personaldetail`, data, {
      headers: { Authorization: token },
    });
    console.log(response);
  } catch (error) {
    // localStorage.clear();
    // console.log("Token:", token);
    localStorage.removeItem("token");
    // console.log("Token removed from localStorage.");
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Status code:", error.response.status);
      console.error("Status text:", error.response);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
  }
};
//*-------------------------------
//login functionality with o auth
//*-------------------------------
export const loginWithGoogle = () => {
  window.open(`${URL}/auth/google/callback`, "_self");
};
//*-------------------------------
//get O Auth data from backend
//*-------------------------------
export const getUserSuccess = async () => {
  try {
    const user = await axios.get(`${URL}/api/users/login/success`, {
      withCredentials: true,
    });
    console.log("Response from o auth ", user.data);
    return user.data;
  } catch (error) {
    console.log("Error while calling getUserSuccess Api ", error);
  }
};
//*-------------------------------
//!logout functionality with o auth
//*-------------------------------
export const logout = () => {
  window.open(`${URL}/api/users/logoutsession`, "_self");
};
//*---------------
//get all products
//*---------------
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${URL}/api/products/getproducts`);
    console.log("Products ", response);
    return response;
  } catch (error) {
    console.log(
      "Error while fetching products: savePersonalDetail Api ",
      error
    );
  }
};
//*------------
//Get All Users
//*------------
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${URL}/api/users/getallusers`);
    console.log("Products ", response);
    return response;
  } catch (error) {
    console.log("Error while fetching All Users ", error);
  }
};
//*-------
//Get User
//*-------
export const getUser = async (id) => {
  console.log("id ", id);
  try {
    const response = await axios.get(`${URL}/api/users/${id}`);
    console.log("Get User in API ", response);
    return response;
  } catch (error) {
    console.log("Error while fetching Single User ", error);
  }
};
//*----------
//Delete User
//*----------
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${URL}/api/users/${id}`);
    console.log("Delete User ", response);
    return response;
  } catch (error) {
    console.log("Error while deleting User ", error);
  }
};

//*---------------

//*---------------
