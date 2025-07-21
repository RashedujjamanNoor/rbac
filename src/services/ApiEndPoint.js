import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000, // Optional: Set a request timeout
});

// Axios helpers
export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const del = (url) => instance.delete(url); // renamed from 'delet'

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    // You can modify headers or log here
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optionally handle errors globally
    return Promise.reject(error);
  }
);
