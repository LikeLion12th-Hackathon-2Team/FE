import axios from "axios";
import { getCookie, setCookie } from "../auth/cookie";

const instance = axios.create({
  baseURL: `https://hyunwoo9930.store`,
});


instance.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = getCookie('refreshToken');
                const response = await axios.post('https://hyunwoo9930.store/api/auth/refresh', { refreshToken: refreshToken });
                const newAccessToken = response.data.accessToken;
                setCookie('accessToken', newAccessToken);

                originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return instance(originalRequest);
            } catch (refreshError) {
                console.log('refresh error:', refreshError);
                // Optional: Redirect to login page if refresh token is invalid
            }
        }

        return Promise.reject(error);
    }
);

export default instance;
