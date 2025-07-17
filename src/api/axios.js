import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // dummy API
});

export default api;
