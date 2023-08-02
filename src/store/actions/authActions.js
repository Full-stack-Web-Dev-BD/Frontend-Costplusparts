import axios from 'axios';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

export const login = (email, password) => async (dispatch) => {
  // alert("Please call ")
  try {
    const response = await axios.post('http://localhost:5000/api/auth', { email, password });
    console.log("response", response.data)
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    console.log("login error", error)
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  // Perform any necessary cleanup, e.g., invalidate tokens on the server
  dispatch({ type: 'LOGOUT' });
};

export const signup = (firstname, lastname, company, country, phone, email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users', { firstname, lastname, company, country, phone, email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: {firstname, lastname, company, country, phone, email, password} });
    toast.success('Successfully Registered.');
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    toast.error(error.message);
  }
};