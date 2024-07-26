import axios from 'axios';
import env from 'react-dotenv';


const API_URL = env.REACT_APP_API_URL;

export const getSubjects = async () => {
    const response = await axios.get(`${API_URL}/subjects`);
    return response.data;
  };
  
  export const createSubject = async (subjectData) => {
    const response = await axios.post(`${API_URL}/subjects`, subjectData);
    return response.data;
  };
  
  export const updateSubject = async (id, subjectData) => {
    const response = await axios.put(`${API_URL}/subjects/${id}`, subjectData);
    return response.data;
  };