// src/utils/axios.js
import axios from "axios";
import { useAuth } from "../../hook/AuthContext";
import { BASE_URL, PERSONAL_API_KEY } from "../../config/configuration";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // Required for http-only cookies
});

// Function to get updated access token
const refreshAccessToken = async (updateToken) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/refresh`, {}, {
            withCredentials: true,
            headers: {
                api_key: PERSONAL_API_KEY
            }
        });

        const newToken = response.data.accessToken;
        updateToken(newToken); // Update token in Context
        return newToken;
    } catch (error) {
        console.error("Token refresh failed:", error);
        return null;
    }
};

// Request Interceptor (Attach Token to Requests)
axiosInstance.interceptors.request.use(
    async (config) => {
        const { token } = useAuth(); // Get token from Context
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor (Handle Token Expiry)
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const { updateToken, logout } = useAuth(); // Access AuthContext

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const newToken = await refreshAccessToken(updateToken); // Refresh the token

            if (newToken) {
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return axiosInstance(originalRequest); // Retry the request with new token
            } else {
                logout(); // If refresh fails, log out user
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
