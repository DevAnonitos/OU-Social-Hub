import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";

export const instance = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
  timeout: 3 * 1000,
  headers: {
    'Content-Type': 'application/json'
  },
});

const refreshAccessToken = async() => {
  const { refreshToken, setAuth, clearAuth, user } = useAuthStore.getState();
  const router = useRouter();

  try {
    const response = await axios.post(`http://localhost:4000/api/v1/auth/refresh-token`, {
      refreshToken,
    });

    const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;

    setAuth(newAccessToken, newRefreshToken, user!);

    return newAccessToken;
  } catch (error) {
    console.error('Failed to refresh token:', error);

    clearAuth();
    router.push('/sign-in');
    throw error;
  }
};

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
  async (error: any) => {
    const originalRequest = error.config;

    if(error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const newAccessToken = await refreshAccessToken();

        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (error: any) {
        return Promise.reject(error);
      }
    }

    console.log(error);
    return Promise.reject(error);
  }
);



