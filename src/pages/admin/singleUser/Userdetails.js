import  { useEffect } from "react";
import "./singleuser.scss";
import Single from "../../../components/single/Single";
import { getUser } from "../../../services/api";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserData, selectUserData } from "../../../redux/slices/user/userSlice";


export default function Userdetails() {
  
  const { id } = useParams();
  const users = useSelector(selectUserData );
  const dispatch = useDispatch();

  //getting user data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser(id);
        console.log(
          "response in SingleUser.js Getting user data ",
          response.data
        );
        dispatch(setUserData(response.data));
      } catch (error) {
        console.log("Error fetching Users", error);
      }
    };
    fetchData();
  }, [id, dispatch]);
  //

  return (
    <div className="singleUser">
      <Single {...users} />
    </div>
  );
}
