import axios from "axios";

const api = axios.create({
  baseURL: process.env.PUBLIC_URL,
  headers: { 'Content-Type': 'application/json'},
});

export default api;