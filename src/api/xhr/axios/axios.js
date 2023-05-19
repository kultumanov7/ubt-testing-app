import axios from "axios";
import { BASE_URL } from "../../../configs";
import { ACCESS_TOKEN, STP_OPEN_SIDE } from "../../../utils/consts";

// localStorage.setItem(ACCESS_TOKEN, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1MDEzNjY0LCJpYXQiOjE2ODQ0MDg4NjQsImp0aSI6IjJjZTFlYjMyZmE5NTQyNGU5MGMzY2NiYjFiMmNiYjk3IiwidXNlcl9pZCI6MX0.pn7npxucQcMbQnM2JJV15CMdtbOuiwGtmICweRwbypQ");
export let accessToken = localStorage.getItem(ACCESS_TOKEN);

const axiosRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  },
});

axiosRequest.interceptors.request.use(
  (request) => {
    if (!accessToken) {
      accessToken = localStorage.getItem(ACCESS_TOKEN);
      if (accessToken) {
        request.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }
    return request;
  },
  (error) => Promise.reject(error)
);

axiosRequest.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(ACCESS_TOKEN);
      window.location.href = `${STP_OPEN_SIDE}/auth`;
    }
    return Promise.reject(error);
  }
);

export default axiosRequest;
