import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
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
    alert('Successfully Registered.');
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    alert(error.message);
  }
};