import axios from "axios";     

const URL = process.env.REACT_APP_API_URL;



//*-----
//signUp
//*-----
export const signUp = async (data) => {
  try {
    await axios.post(`${URL}/api/users/signup`, data);
    alert("Sign up Successful");
  } catch (error) {
    console.log("Error while calling signup Api ", error);
  }
};
//*-----
//login
//*-----
export const login = async (data) => {
  try {
    await axios.post(`${URL}/api/users/login`, data);    
    return alert("Login Successfull")
  } catch (error) {
    console.log("Error while calling signup Api ", error);
    alert("Login Failed")
  }
};
//*------------------------------------
//saving personal detail data with form
//*------------------------------------
export const savePersonalDetail = async(data) => {
  try {
    const response = await axios.post(`${URL}/api/users/personaldetail`, data);
    console.log(response);
  } catch (error) {
    console.log("Error while calling savePersonalDetail Api ",error);
  }
}
//*-------------------------------
//logout functionality with o auth
//*-------------------------------
export const logout = () => {
  window.open(`${URL}/api/users/logout`, "_self");
};
//*---------------
//get all products
//*---------------
export const getAllProducts = async() => {
  try {
    const response = await axios.get(`${URL}/api/products/getproducts`);
    console.log("Products ",response);
    return response;
  } catch (error) {
    console.log("Error while fetching products: savePersonalDetail Api ",error);
  }
}
//*------------------
//Get All Users
//*------------------




//! i have to use context api for this 
// const getUserSuccess = async () => {
//   try {
//     const user = await axios.get(`${URL}/api/users/login/success`, {
//       withCredentials: true,
//     });
//     console.log("Response from o auth ", user);
//     setUserData(user.data.user);
//   } catch (error) {
//     console.log("Error while calling getUserSuccess Api ", error);
//   }
// };

// export const getUserDetails = async() => {
//   try {
//     await axios.put(`${URL}/api/users/personaldetail`)
//   } catch (error) {
    
//   }
// }

export const updatePersonalDetail = async() => {
  
}