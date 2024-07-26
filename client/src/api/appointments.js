import axios from 'axios';
import env from 'react-dotenv';


const API_URL = env.REACT_APP_API_URL;

/**
 * These functions handle fetching, creating, and updating appointments using asynchronous requests in
 * JavaScript.
 * @returns The functions `getAppointments`, `createAppointment`, and `updateAppointment` are returning
 * the data received from the API after making the respective requests.
 */
export const getAppointments = async () => {
    const response = await axios.get(`${API_URL}/appointments`);
    return response.data;
  };
  
  export const createAppointment = async (appointmentData) => {
    const response = await axios.post(`${API_URL}/appointments`, appointmentData);
    return response.data;
  };
  
  export const updateAppointment = async (id, status) => {
    const response = await axios.put(`${API_URL}/appointments/${id}`, { status });
    return response.data;
  };