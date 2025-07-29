import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const tokenString = localStorage.getItem("blogger_jwt");
    const token = tokenString ? JSON.parse(tokenString) : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
