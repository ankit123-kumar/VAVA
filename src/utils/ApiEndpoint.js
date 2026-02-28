
const BASE_URL = "https://vava-backend.onrender.com/api/v1";

export const API_ENDPOINTS = {
    auth: {
        login: `${BASE_URL}/auth/login`,
        register: `${BASE_URL}/auth/register`,
        refresh: `${BASE_URL}/auth/refresh`,
    }
}