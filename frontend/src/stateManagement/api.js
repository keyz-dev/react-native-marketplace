// api.js
import axios from 'axios';

const API_BASE_URL = 'http://192.168.43.152:5000/v2/api'; // Replace with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
