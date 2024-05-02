import axios from "axios";

const URL = process.env.REACT_APP_API_URL;
//*-----
//signUp
//*-----
// export const signUp = async (data) => {
//   try {
//     await axios.post(`${URL}/api/user/signup`, data);
//     return true;
//   } catch (error) {
//     console.log("Error while calling signup Api ", error);
//   }
// };
//*-----
//login
//*-----
// export const login = async (data) => {
//   try {
//     return await axios.post(`${URL}/api/user/login`, data);
//   } catch (error) {
//     console.log("Error while calling signup Api ", error);
//     alert("Login Failed");
//   }
// };
//*---------------
//get all products
//*---------------
// export const getAllProducts = async () => {
//   try {
//     const { data } = await axios.get(`${URL}/api/product/getAllProducts`);
//     // console.log("Products ", data);
//     return data;
//   } catch (error) {
//     console.log(
//       "Error while fetching products: savePersonalDetail Api ",
//       error
//     );
//   }
// };
//*------------------------------------
//Saving personal detail data with form
//*------------------------------------
export const savePersonalDetail = async (data, token) => {
  try {
    const response = await axios.post(`${URL}/api/user/personaldetail`, data, {
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
    const user = await axios.get(`${URL}/api/user/login/success`, {
      withCredentials: true,
    });
    // console.log("Response from o auth ", user.data);
    return user.data;
  } catch (error) {
    console.log("Error while calling getUserSuccess Api ", error);
  }
};
//*-------------------------------
//!logout functionality with o auth
//*-------------------------------
export const logout = async() => {
  const logout = await axios.get(`${URL}/api/users/logoutsession`);
  return logout;
};
//*------------
//Get All Users
//*------------
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${URL}/api/user/getallusers`);
    console.log("Users ", response);
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
    const response = await axios.get(`${URL}/api/user/${id}`);
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
    const response = await axios.delete(`${URL}/api/user/${id}`);
    console.log("Delete User ", response);
    return response;
  } catch (error) {
    console.log("Error while deleting User ", error);
  }
};
//*-----------------------
//Getting Key From backend
//*-----------------------
export const fetchPaymentKey = async () => {
  try {
    const {
      data: { key },
    } = await axios.get(`${URL}/api/payment/key`);
    return key;
  } catch (error) {
    console.error("Error fetching payment key:", error);
    throw error;
  }
};
//*----------------------------
//Sending new Order to backend
//*---------------------------
export const createOrder = async (price) => {
  try {
    const {
      data: { order },
    } = await axios.post(`${URL}/api/payment/checkout`, { price });
    return order;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
