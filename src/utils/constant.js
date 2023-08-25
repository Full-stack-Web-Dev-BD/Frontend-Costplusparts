import jwtDecode from "jwt-decode";
import dotenv from 'dotenv';
dotenv.config();

export  const BASE_URL = process.env.BASE_URL;

export const getUserID = () => {
  var userID;
  const token = window.localStorage.getItem("token");
  var decodedToken;
  if (token) {
    decodedToken = jwtDecode(token);
    userID = decodedToken?.user?.id;
  }
  return userID;
};
 
export const authTokenInHeader= ()=>{
  return {
    'x-auth-token': window.localStorage.getItem("token")
  }
}
