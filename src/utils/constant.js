import jwtDecode from "jwt-decode";

export const BASE_URL = "http://localhost:5000";

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
