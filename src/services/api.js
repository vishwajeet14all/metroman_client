import axios from "axios";


     
const URL = process.env.REACT_APP_API_URL;





export const signUp = async (data) => {
  try {
    await axios.post(`${URL}/api/users/signup`, data);
    alert("Sign up Successful");
  } catch (error) {
    console.log("Error while calling signup Api ", error);
  }
};

export const login = async (data) => {
  try {
    await axios.post(`${URL}/api/users/login`, data);    
    return alert("Login Successfull")
  } catch (error) {
    console.log("Error while calling signup Api ", error);
    alert("Login Failed")
  }
};

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


//saving personal detail data with form
export const savePersonalDetail = async(data) => {
  try {
    const response = await axios.post(`${URL}/api/users/personaldetail`, data);
    console.log(response);
  } catch (error) {
    console.log("Error while calling savePersonalDetail Api ",error);
  }
}