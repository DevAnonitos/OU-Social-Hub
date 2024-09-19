import axios from "axios";
import { useAuthStore } from "@/stores/useAuthStore";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  timeout: 3 * 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
});

instance.interceptors.request.use(
    (config: any) => {

      const { accessToken } = useAuthStore.getState();

      if(accessToken && config.headers) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        console.log(accessToken);
      }

      console.log(config);

      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
);

instance.interceptors.response.use(
  (response: any) => {
    console.log(response);
    return response;
  },
  (error: any) => {
    const originalRequest = error.config;

    if(error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        
        return instance(originalRequest);
      } catch (error: any) {
        return Promise.reject(error);
      }
    }


    console.log(error);
    return Promise.reject(error);
  }
)



